import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Recipe } from '../../models/recipe';
import { DataStorageService } from '../../services/data-storage.service';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'met-data-storage',
  templateUrl: './data-storage.component.html',
  styleUrls: ['./data-storage.component.css']
})
export class DataStorageComponent implements OnInit {
  inProgress = false;
  status: string;

  constructor(
    private router: Router,
    private recipeService: RecipeService,
    private dataStorageService: DataStorageService,
    public authService: AuthService) { }

  ngOnInit(): void {
    this.loadRecipes();
  }

  loadRecipes(): void {
    this.inProgress = true;
    this.status = 'Loading...';
    this.dataStorageService.getRecipes()
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.recipes = recipes || [];
          this.router.navigate(['/recipes']);
        },
        error => {
          console.log(error);
          this.inProgress = false;
        },
        () => this.inProgress = false);
  }

  saveRecipes(): void {
    this.inProgress = true;
    this.status = 'Saving...';
    this.dataStorageService.putRecipes(this.recipeService.recipes)
      .subscribe(
        _ => { },
        error => {
          console.log(error);
          this.inProgress = false;
        },
        () => this.inProgress = false);
  }
}

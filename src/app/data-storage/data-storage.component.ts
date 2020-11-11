import { Component } from '@angular/core';
import { Recipe } from '../models/recipe';
import { DataStorageService } from '../services/data-storage.service';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'met-data-storage',
  templateUrl: './data-storage.component.html',
  styleUrls: ['./data-storage.component.css']
})
export class DataStorageComponent {
  inProgress = false;
  status: string;

  constructor(private recipeService: RecipeService, private dataStorageService: DataStorageService) { }

  loadRecipes(): void {
    this.inProgress = true;
    this.status = 'Loading...';
    this.dataStorageService.getRecipes()
      .subscribe(
        (recipes: Recipe[]) => this.recipeService.recipes = recipes || [],
        error => {
          console.log(error);
          this.inProgress = false
        },
        () => this.inProgress = false);
  }

  saveRecipes(): void {
    this.inProgress = true;
    this.status = 'Saving...';
    this.dataStorageService.putRecipes(this.recipeService.recipes)
      .subscribe(
        _ => {},
        error => {
          console.log(error);
          this.inProgress = false
        },
        () => this.inProgress = false);
  }
}

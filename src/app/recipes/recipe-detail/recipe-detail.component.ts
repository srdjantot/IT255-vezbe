import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe';
import { AuthService } from 'src/app/services/auth.service';
import { RecipeService } from 'src/app/services/recipe.service';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'met-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  id: number;
  recipe: Recipe;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService,
    public authService: AuthService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = parseInt(params.get('id'), 10);
      this.recipe = this.recipeService.recipes[this.id];
    });
  }

  addIngredients(): void {
    this.recipe.ingredients.forEach(ingredient => this.shoppingListService.add(ingredient));
  }

  onDelete(): void {
    this.recipeService.remove(this.recipe);
    this.router.navigate(['/recipes']);
  }

}

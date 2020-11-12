import { Component } from '@angular/core';
import { Recipe } from '../models/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'met-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  constructor(private recipeService: RecipeService) { }

  get recipes(): Recipe[] {
    return this.recipeService.recipes;
  }
}

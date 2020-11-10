import { Component } from '@angular/core';
import { Recipe } from './models/recipe';
import { RecipeService } from './services/recipe.service';

@Component({
  selector: 'met-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editing = false;

  constructor(private recipeService: RecipeService) { }

  get recipes(): Recipe[] {
    return this.recipeService.recipes;
  }

  onResult(recipe: Recipe): void {
    if (recipe) {
      this.recipeService.add(recipe);
    }

    this.editing = false;
  }
}

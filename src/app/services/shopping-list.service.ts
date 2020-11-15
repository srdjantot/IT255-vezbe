import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Ingredient } from '../models/ingredient';
import { RecipeReducers } from '../store/recipe.reducer';
import * as RecipeActions from '../store/recipe.actions';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  #ingredients: Ingredient[] = [];

  constructor(private store: Store<RecipeReducers>) {
    this.store.select(state => state.recipes.ingredients).subscribe(ingredients => this.#ingredients = ingredients);
  }

  get ingredients(): Ingredient[] {
    return this.#ingredients;
  }

  set ingredients(ingredients: Ingredient[]) {
    this.store.dispatch(RecipeActions.setIngredients({ ingredients }));
  }

  add(ingredient: Ingredient): void {
    this.store.dispatch(RecipeActions.addIngredient({ ingredient }));
  }

  remove(ingredient: Ingredient): void {
    this.store.dispatch(RecipeActions.removeIngredient({ ingredient }));
  }
}

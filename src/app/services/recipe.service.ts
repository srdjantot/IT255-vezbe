import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Recipe } from '../models/recipe';
import * as RecipeActions from '../store/recipe.actions';
import { RecipeReducers } from '../store/recipe.reducer';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  #recipes: Recipe[] = [];

  constructor(private store: Store<RecipeReducers>) {
    this.store.select(state => state.recipes.recipes).subscribe(recipes => this.#recipes = recipes);
  }

  get recipes(): Recipe[] {
    return this.#recipes;
  }

  set recipes(recipes: Recipe[]) {
    this.store.dispatch(RecipeActions.set({ recipes }));
  }

  add(recipe: Recipe): void {
    this.store.dispatch(RecipeActions.add({ recipe }));
  }

  replace(old: Recipe, created: Recipe): void {
    this.store.dispatch(RecipeActions.replace({ old, created }));
  }

  remove(recipe: Recipe): void {
    this.store.dispatch(RecipeActions.remove({ recipe }));
  }
}

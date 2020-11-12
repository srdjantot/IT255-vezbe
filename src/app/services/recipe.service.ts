import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  #recipes: Recipe[] = [];

  constructor() { }

  get recipes(): Recipe[] {
    return this.#recipes;
  }

  set recipes(value: Recipe[]) {
    this.#recipes = value || [];
  }

  add(recipe: Recipe): void {
    this.recipes = this.recipes.concat(recipe);
  }

  replace(old: Recipe, created: Recipe): void {
    this.recipes = this.recipes.map(recipe => recipe === old ? created : recipe);
  }

  remove(recipe: Recipe): void {
    this.recipes = this.recipes.filter(item => item !== recipe);
  }
}

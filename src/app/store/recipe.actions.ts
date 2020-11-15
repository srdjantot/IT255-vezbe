import { createAction, props } from '@ngrx/store';
import { Ingredient } from '../models/ingredient';
import { Recipe } from '../models/recipe';

export const addRecipe = createAction('[Recipe] Add', props<{ recipe: Recipe }>());
export const replaceRecipe = createAction('[Recipe] Replace', props<{ old: Recipe, created: Recipe }>());
export const removeRecipe = createAction('[Recipe] Remove', props<{ recipe: Recipe }>());
export const setRecipes = createAction('[Recipes] Set', props<{ recipes: Recipe[] }>());
export const addIngredient = createAction('[Ingredient] Add', props<{ ingredient: Ingredient }>());
export const removeIngredient = createAction('[Ingredient] Remove', props<{ ingredient: Ingredient }>());
export const setIngredients = createAction('[Ingredients] Set', props<{ ingredients: Ingredient[] }>());

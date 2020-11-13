import { createAction, props } from '@ngrx/store';
import { Recipe } from '../models/recipe';

export const add = createAction('[Recipe] Add', props<{ recipe: Recipe }>());
export const replace = createAction('[Recipe] Replace', props<{ old: Recipe, created: Recipe }>());
export const remove = createAction('[Recipe] Remove', props<{ recipe: Recipe }>());
export const set = createAction('[Recipes] Set', props<{ recipes: Recipe[] }>());

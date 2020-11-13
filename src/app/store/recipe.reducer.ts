import { Action, createReducer, on } from '@ngrx/store';
import { Recipe } from '../models/recipe';
import * as RecipeActions from './recipe.actions';

export interface State {
    recipes: Recipe[];
}

const initialState: State = {
    recipes: []
};

const reducer = createReducer(
    initialState,
    on(RecipeActions.add, (state, { recipe }) => ({
        ...state,
        recipes: state.recipes.concat(recipe)
    })),
    on(RecipeActions.replace, (state, { old, created }) => ({
        ...state,
        recipes: state.recipes.map(recipe => recipe === old ? created : recipe)
    })),
    on(RecipeActions.remove, (state, { recipe }) => ({
        ...state,
        recipes: state.recipes.filter(item => item !== recipe)
    })),
    on(RecipeActions.set, (state, { recipes }) => ({
        ...state,
        recipes: recipes || []
    }))
);

export function recipeReducer(state: State | undefined, action: Action): State {
    return reducer(state, action);
}

export type RecipeReducers = { recipes: State };

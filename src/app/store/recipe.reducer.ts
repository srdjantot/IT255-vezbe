import { Action, createReducer, on } from '@ngrx/store';
import { Ingredient } from '../models/ingredient';
import { Recipe } from '../models/recipe';
import * as RecipeActions from './recipe.actions';

export interface State {
    recipes: Recipe[];
    ingredients: Ingredient[];
}

const initialState: State = {
    recipes: [],
    ingredients: []
};

const reducer = createReducer(
    initialState,
    on(RecipeActions.addRecipe, (state, { recipe }) => ({
        ...state,
        recipes: state.recipes.concat(recipe)
    })),
    on(RecipeActions.replaceRecipe, (state, { old, created }) => ({
        ...state,
        recipes: state.recipes.map(recipe => recipe === old ? created : recipe)
    })),
    on(RecipeActions.removeRecipe, (state, { recipe }) => ({
        ...state,
        recipes: state.recipes.filter(item => item !== recipe)
    })),
    on(RecipeActions.setRecipes, (state, { recipes }) => ({
        ...state,
        recipes: recipes || []
    })),
    on(RecipeActions.addIngredient, (state, { ingredient }) => ({
        ...state,
        ingredients: state.ingredients.concat(ingredient)
    })),
    on(RecipeActions.removeIngredient, (state, { ingredient }) => ({
        ...state,
        ingredients: state.ingredients.filter(item => item !== ingredient)
    })),
    on(RecipeActions.setIngredients, (state, { ingredients }) => ({
        ...state,
        ingredients: ingredients || []
    }))
);

export function recipeReducer(state: State | undefined, action: Action): State {
    return reducer(state, action);
}

export type RecipeReducers = { recipes: State };

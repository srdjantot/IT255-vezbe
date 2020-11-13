import { NgModule } from '@angular/core';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { recipeReducer, RecipeReducers } from './store/recipe.reducer';

const reducers: ActionReducerMap<RecipeReducers> = {
  recipes: recipeReducer
};

@NgModule({
  imports: [StoreModule.forRoot(reducers)],
  exports: [StoreModule]
})
export class AppStoreModule { }

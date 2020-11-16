import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Recipe } from '../models/recipe';
import * as RecipeActions from '../store/recipe.actions';
import { RecipeReducers, State } from '../store/recipe.reducer';
import { RecipeService } from './recipe.service';

describe('RecipeService', () => {
  const initialState: State = {
    recipes: [
      new Recipe('test', 'test', 'test', [])
    ],
    ingredients: []
  };
  let store: MockStore<RecipeReducers>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore<RecipeReducers>({ initialState: { recipes: initialState } })
      ]
    });

    store = TestBed.inject(MockStore);
  });

  it('should create the service', () => {
    const service = TestBed.inject(RecipeService);
    expect(service).toBeTruthy();
  });

  it('should return recipes from the store', () => {
    const service = TestBed.inject(RecipeService);
    expect(service.recipes).toEqual(initialState.recipes);
  });

  it('should dispatch addRecipe to store on add', () => {
    const service = TestBed.inject(RecipeService);
    const dispatchSpy = spyOn(store, 'dispatch');
    const recipe = new Recipe('test2', 'test2', 'test2', []);
    service.add(recipe);
    expect(dispatchSpy).toHaveBeenCalledWith(RecipeActions.addRecipe({ recipe }));
  });

  it('should dispatch removeRecipe to store on remove', () => {
    const service = TestBed.inject(RecipeService);
    const dispatchSpy = spyOn(store, 'dispatch');
    const recipe = new Recipe('test2', 'test2', 'test2', []);
    service.remove(recipe);
    expect(dispatchSpy).toHaveBeenCalledWith(RecipeActions.removeRecipe({ recipe }));
  });

  it('should dispatch replaceRecipe to store on replace', () => {
    const service = TestBed.inject(RecipeService);
    const dispatchSpy = spyOn(store, 'dispatch');
    const recipe = new Recipe('test2', 'test2', 'test2', []);
    service.replace(initialState.recipes[0], recipe);
    expect(dispatchSpy).toHaveBeenCalledWith(RecipeActions.replaceRecipe({ old: initialState.recipes[0], created: recipe }));
  });

  it('should dispatch setRecipes to store on property set', () => {
    const service = TestBed.inject(RecipeService);
    const dispatchSpy = spyOn(store, 'dispatch');
    const recipe = new Recipe('test2', 'test2', 'test2', []);
    service.recipes = [recipe];
    expect(dispatchSpy).toHaveBeenCalledWith(RecipeActions.setRecipes({ recipes: [recipe] }));
  });
});

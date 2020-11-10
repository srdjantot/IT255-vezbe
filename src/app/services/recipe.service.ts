import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes = [
    new Recipe(
      'Chinese Chicken',
      'Chinese Chicken with sweet and sour sauce',
      'https://s-media-cache-ak0.pinimg.com/originals/63/6d/8d/636d8d6cfbf1862e5ad5f89571c55430.jpg',
      [new Ingredient('Chicken Portions', 4), new Ingredient('Chinese spices', 1)]),
    new Recipe(
      'Sausage Casserole',
      'Sausage Casserole with onion gravy',
      'http://d3udvtnhu4gqbm.cloudfront.net/wp-content/uploads/Italian-Sausage.jpg',
      [new Ingredient('Sausages', 6), new Ingredient('Onions', 2)]),
    new Recipe(
      'Taco Meat Recipe',
      'Taco with minced beef and onion',
      'https://www.sheknows.com/wp-content/uploads/2018/08/otylyq1cjh6jobdrg0q5.jpeg',
      [new Ingredient('Minced Beef', 2), new Ingredient('Onions', 2)]),
    new Recipe(
      'Egg delight',
      'Lightly toasted wraps with fresh eggs',
      'https://www.sheknows.com/wp-content/uploads/2018/08/ivenjnophdgmridughl3.jpeg',
      [new Ingredient('Eggs', 6), new Ingredient('Wraps', 2), new Ingredient('Cheese', 1)]),
    new Recipe(
      'Fried EggPlant',
      'Eggplant daked with cheese',
      'https://i.ytimg.com/vi/VGSc5WIljb0/maxresdefault.jpg',
      [new Ingredient('Aubergine', 6), new Ingredient('Cheese', 2)])
  ];

  constructor() { }

  add(recipe: Recipe): void {
    this.recipes = this.recipes.concat(recipe);
  }
}

import { Component } from '@angular/core';
import { Recipe } from './models/recipe';

@Component({
  selector: 'met-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipes = [
    new Recipe(
      'Chinese Chicken',
      'Chinese Chicken with sweet and sour sauce',
      'https://s-media-cache-ak0.pinimg.com/originals/63/6d/8d/636d8d6cfbf1862e5ad5f89571c55430.jpg'),
    new Recipe(
      'Sausage Casserole',
      'Sausage Casserole with onion gravy',
      'http://d3udvtnhu4gqbm.cloudfront.net/wp-content/uploads/Italian-Sausage.jpg'),
    new Recipe(
      'Taco Meat Recipe',
      'Taco with minced beef and onion',
      'https://www.sheknows.com/wp-content/uploads/2018/08/otylyq1cjh6jobdrg0q5.jpeg'),
    new Recipe(
      'Egg delight',
      'Lightly toasted wraps with fresh eggs',
      'https://www.sheknows.com/wp-content/uploads/2018/08/ivenjnophdgmridughl3.jpeg'),
    new Recipe(
      'Fried EggPlant',
      'Eggplant daked with cheese',
      'https://i.ytimg.com/vi/VGSc5WIljb0/maxresdefault.jpg')
  ];
}

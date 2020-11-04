import { Component } from '@angular/core';

@Component({
  selector: 'met-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipes = [
    {
      name: 'Chinese Chicken',
      description: 'Chinese Chicken with sweet and sour sauce',
      imagePath: 'https://s-media-cache-ak0.pinimg.com/originals/63/6d/8d/636d8d6cfbf1862e5ad5f89571c55430.jpg'
    },
    {
      name: 'Sausage Casserole',
      description: 'Sausage Casserole with onion gravy',
      imagePath: 'http://d3udvtnhu4gqbm.cloudfront.net/wp-content/uploads/Italian-Sausage.jpg'
    },
    {
      name: 'Taco Meat Recipe',
      description: 'Taco with minced beef and onion',
      imagePath: 'https://www.sheknows.com/wp-content/uploads/2018/08/otylyq1cjh6jobdrg0q5.jpeg'
    },
    {
      name: 'Egg delight',
      description: 'Lightly toasted wraps with fresh eggs',
      imagePath: 'https://www.sheknows.com/wp-content/uploads/2018/08/ivenjnophdgmridughl3.jpeg'
    },
    {
      name: 'Fried EggPlant',
      description: 'Eggplant daked with cheese',
      imagePath: 'https://i.ytimg.com/vi/VGSc5WIljb0/maxresdefault.jpg'
    }
  ];
}

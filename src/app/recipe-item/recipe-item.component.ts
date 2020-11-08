import { Component, Input } from '@angular/core';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'met-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
}

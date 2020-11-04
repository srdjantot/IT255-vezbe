import { Component, Input } from '@angular/core';

@Component({
  selector: 'met-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe: any;
}

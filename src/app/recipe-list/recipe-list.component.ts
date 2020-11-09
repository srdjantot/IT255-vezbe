import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'met-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Input() recipes: Recipe[];
  @Output() newRecipe = new EventEmitter<void>();

  onNewRecipe(): void {
    this.newRecipe.emit();
  }
}

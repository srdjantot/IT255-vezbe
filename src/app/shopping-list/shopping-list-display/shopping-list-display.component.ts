import { Component, Input } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'met-shopping-list-display',
  templateUrl: './shopping-list-display.component.html',
  styleUrls: ['./shopping-list-display.component.css']
})
export class ShoppingListDisplayComponent {
  @Input() ingredient: Ingredient;

  constructor(public shoppingListService: ShoppingListService) { }

  onRemoveIngredient(event: Event): void {
    event.preventDefault();
    this.shoppingListService.remove(this.ingredient);
  }
}

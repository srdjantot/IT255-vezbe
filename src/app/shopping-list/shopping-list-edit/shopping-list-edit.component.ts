import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/models/ingredient';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'met-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {

  constructor(private shoppinglistService: ShoppingListService) { }

  addIngredients(form: NgForm): void {
    this.shoppinglistService.add(new Ingredient(form.value.name, form.value.amount));
    this.onClear(form);
  }

  onClear(form: NgForm): void {
    form.reset();
  }

}

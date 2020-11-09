import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Ingredient } from '../models/ingredient';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'met-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  editForm: FormGroup;
  ingredients = new FormArray([]);
  @Output() result = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      'name': new FormControl(undefined, Validators.required),
      'imagePath': new FormControl(undefined, Validators.required),
      'description': new FormControl(undefined, [Validators.required, Validators.minLength(50)]),
      'ingredients': this.ingredients
    })
  }

  onSubmit(): void {
    this.result.emit(new Recipe(
      this.editForm.value.name,
      this.editForm.value.description,
      this.editForm.value.imagePath,
      this.ingredients.controls.map(fg => new Ingredient(fg.value.name, fg.value.amount))
    ));
  }

  onCancel(): void {
    this.result.emit(undefined);
  }

  onNewIngredient(event: Event): void {
    event.preventDefault();
    this.ingredients.push(new FormGroup({
      'name': new FormControl(undefined, Validators.required),
      'amount': new FormControl(undefined, [Validators.required, Validators.min(1)])
    }));
  }

  onRemoveIngredient(i: number, event: Event): void {
    event.preventDefault();
    this.ingredients.removeAt(i);
  }

}

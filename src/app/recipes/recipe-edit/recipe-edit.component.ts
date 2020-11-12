import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Ingredient } from 'src/app/models/ingredient';
import { Recipe } from 'src/app/models/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'met-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipe: Recipe;
  editForm: FormGroup;
  ingredients: FormArray;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.recipe = params.has('id') ? this.recipeService.recipes[parseInt(params.get('id'), 10)] : undefined;

      this.ingredients = new FormArray([]);
      if (this.recipe) {
        this.recipe.ingredients.forEach(ingredient => this.addIngredient(ingredient));
      }

      this.editForm = this.formBuilder.group({
        name: [this.recipe && this.recipe.name, Validators.required],
        imagePath: [this.recipe && this.recipe.imagePath, Validators.required],
        description: [this.recipe && this.recipe.description, [Validators.required, Validators.minLength(10)]],
        ingredients: this.ingredients
      });
    });
  }

  onSubmit(): void {
    const created = new Recipe(
      this.editForm.value.name,
      this.editForm.value.description,
      this.editForm.value.imagePath,
      this.ingredients.controls.map(fg => new Ingredient(fg.value.name, fg.value.amount))
    );

    if (this.recipe) {
      this.recipeService.replace(this.recipe, created);
    } else {
      this.recipeService.add(created);
    }
    this.router.navigate(['..']);
  }

  onCancel(): void {
    this.router.navigate(['..']);
  }

  onDelete(): void {
    this.recipeService.remove(this.recipe);
    this.router.navigate(['..']);
  }

  onNewIngredient(event: Event): void {
    event.preventDefault();
    this.addIngredient();
  }

  onRemoveIngredient(i: number, event: Event): void {
    event.preventDefault();
    this.ingredients.removeAt(i);
  }

  private addIngredient(ingredient?: Ingredient): void {
    this.ingredients.push(this.formBuilder.group({
      name: [ingredient && ingredient.name, Validators.required],
      amount: [ingredient && ingredient.amount, [Validators.required, Validators.min(1)]]
    }));
  }

}

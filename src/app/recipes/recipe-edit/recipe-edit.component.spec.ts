import { TestBed } from '@angular/core/testing';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient';
import { Recipe } from 'src/app/models/recipe';
import { RecipeService } from 'src/app/services/recipe.service';
import { RecipeEditComponent } from './recipe-edit.component';

describe('RecipeEditComponent', () => {
  let recipeServiceSpy: jasmine.SpyObj<RecipeService>;
  const recipe = new Recipe('name', 'description', 'imagePath', [new Ingredient('ingredient', 1)]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [
        RecipeEditComponent
      ],
      providers: [
        FormBuilder,
        { provide: RecipeService, useValue: jasmine.createSpyObj<RecipeService>('RecipeService', {}, { recipes: [recipe] }) },
        { provide: ActivatedRoute, useValue: { paramMap: of(convertToParamMap({ id: 0 })) } }
      ]
    }).compileComponents();

    recipeServiceSpy = TestBed.inject(RecipeService) as jasmine.SpyObj<RecipeService>;
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(RecipeEditComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should get recipe from location', () => {
    const fixture = TestBed.createComponent(RecipeEditComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.recipe).toEqual(recipe);
  });

  it('should require name value', () => {
    const fixture = TestBed.createComponent(RecipeEditComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    component.editForm.controls.name.setValue('');
    component.editForm.controls.name.markAsTouched();
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.invalid-feedback').textContent).toContain('Recipe name is required field');
  });

  it('should require description value', () => {
    const fixture = TestBed.createComponent(RecipeEditComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    component.editForm.controls.description.setValue('');
    component.editForm.controls.description.markAsTouched();
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.invalid-feedback').textContent).toContain('Recipe description must be at least 10 characters long');
  });

  it('description should be at least 10 characters long', () => {
    const fixture = TestBed.createComponent(RecipeEditComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    component.editForm.controls.description.setValue('123456789');
    component.editForm.controls.description.markAsTouched();
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.invalid-feedback').textContent).toContain('Recipe description must be at least 10 characters long');
  });

  it('should load ingredients from recipe', () => {
    const fixture = TestBed.createComponent(RecipeEditComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    const ingredients = ((component.editForm.controls.ingredients) as FormArray);
    expect(ingredients.length).toBe(1);

    const group = ingredients.at(0) as FormGroup;
    expect(group.value.name).toBe('ingredient');
    expect(group.value.amount).toBe(1);
  });
});

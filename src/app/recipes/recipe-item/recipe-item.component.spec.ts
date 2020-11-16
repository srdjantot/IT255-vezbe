import { fakeAsync, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Ingredient } from 'src/app/models/ingredient';
import { Recipe } from 'src/app/models/recipe';
import { RecipeService } from 'src/app/services/recipe.service';
import { RecipeItemComponent } from './recipe-item.component';

describe('RecipeItemComponent', () => {
  let recipeServiceSpy: jasmine.SpyObj<RecipeService>;
  const recipe = new Recipe('name', 'description', 'imagePath', [new Ingredient('ingredient', 1)]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        RecipeItemComponent
      ],
      providers: [
        { provide: RecipeService, useValue: jasmine.createSpyObj<RecipeService>('RecipeService', {}, { recipes: [recipe] }) }
      ]
    }).compileComponents();

    recipeServiceSpy = TestBed.inject(RecipeService) as jasmine.SpyObj<RecipeService>;
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(RecipeItemComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should have 0 as index', () => {
    const fixture = TestBed.createComponent(RecipeItemComponent);
    const component = fixture.componentInstance;
    component.recipe = recipe;
    expect(component.index).toBe(0);
  });

  it('should render name', () => {
    const fixture = TestBed.createComponent(RecipeItemComponent);
    const component = fixture.componentInstance;
    component.recipe = recipe;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h4').textContent).toBe('name');
  });

  it('should render description', () => {
    const fixture = TestBed.createComponent(RecipeItemComponent);
    const component = fixture.componentInstance;
    component.recipe = recipe;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toBe('description');
  });

  it('should render image', () => {
    const fixture = TestBed.createComponent(RecipeItemComponent);
    const component = fixture.componentInstance;
    component.recipe = recipe;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('img').src).toContain('/imagePath');
  });

  it('should render ingredient', () => {
    const fixture = TestBed.createComponent(RecipeItemComponent);
    const component = fixture.componentInstance;
    component.recipe = recipe;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('span').textContent).toBe('ingredient');
  });

  it('should navigate to editor on click', fakeAsync(() => {
    const fixture = TestBed.createComponent(RecipeItemComponent);
    const component = fixture.componentInstance;
    const router = TestBed.inject(Router);
    const navigateByUrlSpy = spyOn(router, 'navigateByUrl').and.returnValue(Promise.resolve(true));

    component.recipe = recipe;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    compiled.querySelector('a').click();

    const expected = router.parseUrl('/0');
    expected.fragment = undefined;
    expect(navigateByUrlSpy).toHaveBeenCalledWith(expected, jasmine.any(Object));
  }));
});

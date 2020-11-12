import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'met-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Input() recipes: Recipe[];

  constructor(public authService: AuthService) { }
}

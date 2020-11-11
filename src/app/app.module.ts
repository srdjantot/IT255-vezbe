import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { APP_TITLE, API_URL } from './app.config';
import { HeaderComponent } from './header/header.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { DataStorageComponent } from './data-storage/data-storage.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeItemComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeEditComponent,
    DataStorageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: APP_TITLE, useValue: "Recipe book" },
    { provide: API_URL, useValue: "https://gilded-befitting-scene.glitch.me" },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

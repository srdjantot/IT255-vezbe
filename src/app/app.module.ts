import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppStoreModule } from './app-store.module';
import { AppComponent } from './app.component';
import { API_URL, APP_TITLE } from './app.config';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthorizationComponent } from './header/authorization/authorization.component';
import { DataStorageComponent } from './header/data-storage/data-storage.component';
import { HeaderComponent } from './header/header.component';
import { AdviceComponent } from './recipes/advice/advice.component';
import { EyesComponent } from './recipes/eyes/eyes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeItemTemplateComponent } from './recipes/recipe-item-template/recipe-item-template.component';
import { RecipeItemComponent } from './recipes/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes/recipes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DataStorageComponent,
    RecipesComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipeEditComponent,
    RecipeItemTemplateComponent,
    RecipeDetailComponent,
    AuthorizationComponent,
    LoginComponent,
    RegisterComponent,
    AdviceComponent,
    EyesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AppStoreModule
  ],
  providers: [
    { provide: APP_TITLE, useValue: 'Recipe book' },
    { provide: API_URL, useValue: 'https://gilded-befitting-scene.glitch.me' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

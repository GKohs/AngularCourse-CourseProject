import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, } from 'rxjs/operators';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as RecipesActions from '../recipes/store/recipe.actions';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  private httpUrl: string =  'https://ng-course-project-2aa9a.firebaseio.com/recipes.json';

  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private store: Store<fromApp.AppState>
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(this.httpUrl, recipes)
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes() {
    // 'take' will get n values and automatically unsubscribe after that

    return this.http
    .get<Recipe[]>(this.httpUrl)
    .pipe(
      map(recipes => {
        return recipes.map(recipe => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : []
          };
        });
      }),
      tap(recipes => {
        // this.recipeService.setRecipes(recipes);
        this.store.dispatch(new RecipesActions.SetRecipes(recipes));
      })
    );
  }
}

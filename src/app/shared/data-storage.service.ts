import { AuthService } from './../auth/auth.service';
import { Ingredient } from './ingredient.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  private httpUrl: string =  'https://ng-course-project-2aa9a.firebaseio.com/recipes.json';

  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {}

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
    return this.authService.user.pipe(take(1), exhaustMap(user => {
      return this.http
      .get<Recipe[]>(
        this.httpUrl,
        {
          params: new HttpParams().set('auth', user.token)
        })
    }), map(recipes => {
      return recipes.map(recipe => {
        return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
      });
    }),
    tap(recipes => {
      this.recipeService.setRecipes(recipes);
    })
    );
  }
}

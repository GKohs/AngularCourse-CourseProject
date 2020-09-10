import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, map } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as RecipeActions from './recipe.actions';
import { Recipe } from '../recipe.model';


@Injectable()
export class RecipeEffects {
  private httpUrl: string = 'https://ng-course-project-2aa9a.firebaseio.com/recipes.json';

  @Effect()
  fetchRecipes = this.actions$.pipe(
    ofType(RecipeActions.FETCH_RECIPES),
    switchMap(() => {
      return this.http
      .get<Recipe[]>(this.httpUrl)
    }),
    map(recipes => {
      return recipes.map(recipe => {
        return {
          ...recipe,
          ingredients: recipe.ingredients ? recipe.ingredients : []
        };
      });
    }),
    map(recipes => {
      return new RecipeActions.SetRecipes(recipes);
    })
  );

  constructor(private actions$: Actions, private http: HttpClient) {

  }
}

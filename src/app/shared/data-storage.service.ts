import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RecipeService } from './../recipes/recipe.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    const httpUrl: string =  'https://ng-course-project-2aa9a.firebaseio.com/recipes.json';
    this.http
      .put(httpUrl, recipes)
      .subscribe(response => {
        console.log(response);
      });

  }

}

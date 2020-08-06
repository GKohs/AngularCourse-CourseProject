import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test (maybe)', 'https://img-global.cpcdn.com/recipes/5559831272357888/640x640sq70/photo.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test (maybe)', 'https://recipecontent.fooby.ch/15287_3-2_480-320.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}

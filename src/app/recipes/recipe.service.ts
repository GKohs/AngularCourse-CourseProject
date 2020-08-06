import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Martabak',
      'Ein Biss in die süße Kindheit!',
      'https://img-global.cpcdn.com/recipes/5559831272357888/640x640sq70/photo.jpg',
      [
        new Ingredient('Flour', 1),
        new Ingredient('Nutella', 5)
      ]),
    new Recipe(
      'Fake Gado-Gado',
      'Wenn du lediglich "versuchen" möchtest, es richtig zu machen.',
      'https://recipecontent.fooby.ch/15287_3-2_480-320.jpg',
      [
        new Ingredient('Gado 1', 2),
        new Ingredient('Gado 2', 3)
      ])
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}

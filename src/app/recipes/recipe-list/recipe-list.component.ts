import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test (maybe)', 'https://img-global.cpcdn.com/recipes/5559831272357888/640x640sq70/photo.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test (maybe)', 'https://img-global.cpcdn.com/recipes/5559831272357888/640x640sq70/photo.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

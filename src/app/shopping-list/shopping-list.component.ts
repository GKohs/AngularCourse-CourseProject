import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Ingredient } from '../shared/ingredient.model';
import { LoggingService } from '../logging.service';
import * as ShoppingListActions from './store/shopping-list.action';
import * as fromApp from '../store/app.reducer';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ ingredients: Ingredient[] }>;
  // private igChangeSub: Subscription;

  constructor(
    private store: Store<fromApp.AppState>
    /* , private loggingService: LoggingService */
  ) { }

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList');
    // this.ingredients = this.sLService.getIngredients();
    // this.igChangeSub = this.sLService.ingredientChanged
    //   .subscribe(
    //     (ingredients: Ingredient[]) => {
    //     this.ingredients = ingredients;
    //   }
    // );
    // this.loggingService.printLog('Hello from ShoppingListComponent ngOnInit!');
  }

  onEditItem(index: number) {
    // this.sLService.startedEditing.next(index);
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }

  ngOnDestroy() {
    // this.igChangeSub.unsubscribe();
  }
}

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ShoppingListComponent } from './shopping-list.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: ShoppingListComponent }
    ])
  ],
  exports: [RouterModule]
})

export class ShoppingListRoutingModule {}

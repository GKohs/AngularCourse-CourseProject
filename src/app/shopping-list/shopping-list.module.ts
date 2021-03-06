import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';

import { SharedModule } from './../shared/shared.module';
// import { LoggingService } from '../logging.service';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [
    RouterModule,
    FormsModule,
    SharedModule,
    ShoppingListRoutingModule
  ],
  exports: [
    ShoppingListComponent  // TODO: needed for recipe access to send ingredients?
  ],
  // providers: [LoggingService]
})
export class ShoppingListModule {}

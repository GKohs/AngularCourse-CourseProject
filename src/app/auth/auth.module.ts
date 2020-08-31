import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: AuthComponent }
    ]),
    SharedModule
  ],

})
export class AuthModule {}

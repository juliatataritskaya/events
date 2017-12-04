import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomModal2Service } from './custom-modal-2.service';
import { CustomModal2Component } from './custom-modal-2.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],

  providers: [CustomModal2Service],
  declarations: []
})
export class CustomModal2Module {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomModal1Service } from './custom-modal-1.service';
import { CustomModal1Component } from './custom-modal-1.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],

  providers: [CustomModal1Service],
  declarations: []
})
export class CustomModal1Module {
}

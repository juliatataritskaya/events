import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StartPageService } from './start-page.service';
import { StartPageComponent } from './start-page.component';
import { CustomModal1Component } from '../custom-modal-1/custom-modal-1.component';
import { CustomModal1Module } from '../custom-modal-1/custom-modal-1.module';
import { CustomModal2Module } from '../custom-modal-2/custom-modal-2.module';
import { CustomModal2Component } from '../custom-modal-2/custom-modal-2.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CustomModal1Module,
    CustomModal2Module
  ],

  providers: [StartPageService],
  declarations: [StartPageComponent, CustomModal1Component, CustomModal2Component]
})
export class StartPageModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {StartPageService} from './start-page.service';
import {StartPageComponent} from './start-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],

  providers: [StartPageService],
  declarations: [StartPageComponent]
})
export class StartPageModule {
}

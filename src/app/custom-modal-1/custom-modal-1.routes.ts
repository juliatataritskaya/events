import { Route } from '@angular/router';
import { CustomModal1Component } from './custom-modal-1.component';


export const CustomModal1Routes: Route[] = [
  {path: '', redirectTo: 'custom-modal-1', pathMatch: 'full'},
  {
    path: 'custom-modal-1', component: CustomModal1Component, children: [
  ]
  }
];

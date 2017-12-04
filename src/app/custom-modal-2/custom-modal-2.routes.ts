import { Route } from '@angular/router';
import { CustomModal2Component } from './custom-modal-2.component';


export const CustomModal2Routes: Route[] = [
  {path: '', redirectTo: 'custom-modal-2', pathMatch: 'full'},
  {
    path: 'custom-modal-2', component: CustomModal2Component, children: [
  ]
  }
];

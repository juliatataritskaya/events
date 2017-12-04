import { Route } from '@angular/router';
import {StartPageComponent} from './start-page.component';

export const StartPageRoutes: Route[] = [
  {path: '', redirectTo: 'start-page', pathMatch: 'full'},
  {
    path: 'start-page', component: StartPageComponent, children: [
  ]
  }
];

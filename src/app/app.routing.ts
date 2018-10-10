import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from 'app/home-page/home-page.component';
import { UnrecognizedRoutePageComponent } from 'app/unrecognized-route-page/unrecognized-route-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: UnrecognizedRoutePageComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRouting { }

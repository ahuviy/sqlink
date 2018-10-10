import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UnrecognizedRoutePageComponent } from './unrecognized-route-page/unrecognized-route-page.component';
import { HeaderComponent } from 'app/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    UnrecognizedRoutePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRouting } from './app.routing';
import { ComputersService } from './computers.service';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UnrecognizedRoutePageComponent } from './unrecognized-route-page/unrecognized-route-page.component';
import { HeaderComponent } from 'app/header/header.component';
import { ComputerCardComponent } from 'app/home-page/computer-card/computer-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    UnrecognizedRoutePageComponent,
    ComputerCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouting,
  ],
  providers: [
    ComputersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

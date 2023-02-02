import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { CardComponent } from './card/card.component';
import { ResultPageComponent } from './result-page/result-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    GamePageComponent,
    CardComponent,
    ResultPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

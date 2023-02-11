import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { CardComponent } from './card/card.component';
import { ResultPageComponent } from './pages/result-page/result-page.component';
import { SpecificationPageComponent } from './pages/specification-page/specification-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AddNameDialogComponent } from './pages/add-name-dialog/add-name-dialog.component';
import { HistoryComponent } from './pages/history/history.component';
import { CreateCardComponent } from './pages/create-card/create-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    GamePageComponent,
    CardComponent,
    ResultPageComponent,
    SpecificationPageComponent,
    AddNameDialogComponent,
    HistoryComponent,
    CreateCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { ResultPageComponent } from './pages/result-page/result-page.component';
import { pagesRoutes } from './constants/constants';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: pagesRoutes[0], component: GamePageComponent },
  { path: pagesRoutes[1], component: ResultPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

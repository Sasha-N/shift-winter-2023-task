import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { ResultPageComponent } from './pages/result-page/result-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'game', component: GamePageComponent },
  { path: 'result', component: ResultPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

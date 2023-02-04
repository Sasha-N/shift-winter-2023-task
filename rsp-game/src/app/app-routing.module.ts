import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { ResultPageComponent } from './pages/result-page/result-page.component';
import { pagesRoutes } from './constants/constants';
import { SpecificationPageComponent } from './pages/specification-page/specification-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: pagesRoutes['gamePage'], component: GamePageComponent },
  { path: pagesRoutes['resultPage'], component: ResultPageComponent },
  { path: pagesRoutes['specPage'], component: SpecificationPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

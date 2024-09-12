import { Component, OnInit } from '@angular/core';
import { pagesRoutes } from 'src/app/constants/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  public pathGame: string = '/' + pagesRoutes['gamePage'];
  public pathSpecification: string = '/' + pagesRoutes['specPage'];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openNewTab() {
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/' + pagesRoutes['specPage']])
    );
  
    window.open(url, '_blank');
  }

}

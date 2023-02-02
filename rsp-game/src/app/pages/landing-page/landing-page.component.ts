import { Component, OnInit } from '@angular/core';
import { pagesRoutes } from 'src/app/constants/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  public pathGame: string = '/' + pagesRoutes[0];
  public pathSpecification: string = '/' + pagesRoutes[2];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openNewTab() {
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/' + pagesRoutes[2]])
    );
  
    window.open(url, '_blank');
  }

}

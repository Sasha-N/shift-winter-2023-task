import { Component, OnInit } from '@angular/core';
import { pagesRoutes } from 'src/app/constants/constants';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  public pathGame: string = '/' + pagesRoutes[0];
  public pathSpecification: string = '/' + pagesRoutes[2];

  constructor() { }

  ngOnInit(): void {
  }

}

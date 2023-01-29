import { Component, OnInit } from '@angular/core';
import { baseCardDeck } from './../constants/constants'

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public onClick(a: any) {
    console.log(a)
  }

}

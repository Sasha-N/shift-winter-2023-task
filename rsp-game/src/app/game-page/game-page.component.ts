import { Component, OnInit } from '@angular/core';
import { baseCardDeck } from './../constants/constants'

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  public playersCard: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public playerChooses(item: string):void {
    this.playersCard = item;
  }

  public play() {
    console.log('result', this.playersCard)
  }

}

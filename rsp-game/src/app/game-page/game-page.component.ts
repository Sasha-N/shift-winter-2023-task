import { Component, OnInit } from '@angular/core';
import { baseCardDeck } from './../constants/constants';
import { winСombinations } from './../constants/constants';

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
  
  private generateRandomNumber():number {
    return Math.floor(Math.random()*3);
  }

  private generateBotAnswer():string {
    let randomNumber = this.generateRandomNumber();
    return baseCardDeck[randomNumber];
  }

  public playerChooses(item: string):void {
    this.playersCard = item;
  }

  public play():void {
    let botChoise = this.generateBotAnswer();

    if (this.playersCard == botChoise) {
      console.log('result: nobody', this.playersCard, botChoise);
      return ;
    };

    if (winСombinations[this.playersCard] == botChoise) {
      console.log('result: you win', this.playersCard, botChoise);
      return ;
    }

    console.log('result: you lose', this.playersCard, botChoise)
  }

}

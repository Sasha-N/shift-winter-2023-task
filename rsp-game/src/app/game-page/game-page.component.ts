import { Component, OnInit } from '@angular/core';
import { baseCardDeck } from './../constants/constants';
import { winСombinations } from './../constants/constants';
import { GameStatusService } from '../providers/game-status.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  public playersCard: string = '';

  constructor(private gameStatusService: GameStatusService) { }

  ngOnInit(): void {
  }

  private generateRandomNumber(): number {
    return Math.floor(Math.random() * 3);
  }

  private generateBotAnswer(): string {
    let randomNumber = this.generateRandomNumber();
    return baseCardDeck[randomNumber];
  }

  public playerChooses(item: string): void {
    this.playersCard = item;
  }

  public play(): void {
    let botChoise = this.generateBotAnswer();
    this.gameStatusService.setCards(this.playersCard, botChoise);

    if (this.playersCard == botChoise) {
      this.gameStatusService.set('draw');
      return;
    };

    if (winСombinations[this.playersCard] == botChoise) {
      this.gameStatusService.set('win');
      return;
    }

    this.gameStatusService.set('fail');
  }

}

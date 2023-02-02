import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameStatusService {
  private state: string = '';
  private playersCard: string = '';
  private computersCard: string = '';
  private playersName: string = '';
  

  constructor() { }

  set(state: string) {
    this.state = state;
  }

  get(): string {
    return this.state;
  }

  setCards(playersCard: string, computersCard: string) {
    this.playersCard = playersCard;
    this.computersCard = computersCard;
  }

  getCards(): Array<string> {
    return [this.playersCard, this.computersCard];
  }

  setName(playersName: string) {
    this.playersName = playersName;
  }

  getName(): string{
    return this.playersName;
  }
}

import { Component, OnInit } from '@angular/core';
import { GameStatusService } from '../providers/game-status.service';
import { winDescription, drawDescription, failDescription } from '../constants/constants';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss']
})
export class ResultPageComponent implements OnInit {
  public resultStatus: string = '';
  public resultCards: Array<string> = [];
  public subtitleText: string = '';
  public imagePath: string = '';

  constructor(private gameStatusService: GameStatusService) { }

  ngOnInit(): void {
    this.resultStatus = this.gameStatusService.get();
    this.resultCards = this.gameStatusService.getCards();

    if (this.resultStatus == 'win') {
      this.subtitleText = winDescription.title;
      this.imagePath = winDescription.image;
    } else if (this.resultStatus == 'draw') {
      this.subtitleText = drawDescription.title;
      this.imagePath = drawDescription.image;
    } else {
      this.subtitleText = failDescription.title;
      this.imagePath = failDescription.image;
    }
  }

}

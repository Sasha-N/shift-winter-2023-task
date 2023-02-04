import { Component, OnInit } from '@angular/core';
import { GameStatusService } from './../../providers/game-status.service';
import { winDescription, drawDescription, failDescription } from './../../constants/constants';
import { LocalService } from 'src/app/providers/local.service';
import { HistoryComponent } from '../history/history.component';
import { MatDialog } from '@angular/material/dialog';
import { pagesRoutes } from './../../constants/constants';

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
  public playersName: string = '';
  public today = new Date();
  public pathGame: string = '';


  constructor(private gameStatusService: GameStatusService, private localService: LocalService, public matDialog: MatDialog) { }

  ngOnInit(): void {
    this.pathGame = '/' + pagesRoutes['gamePage'];
    this.resultStatus = this.gameStatusService.get();
    this.resultCards = this.gameStatusService.getCards();
    this.playersName = this.gameStatusService.getName();

    this.localService.saveData('date', this.today.toLocaleString());
    this.localService.saveData('name', this.playersName);

    if (this.resultStatus == 'win') {
      this.subtitleText = winDescription.title;
      this.imagePath = winDescription.image;
      this.localService.saveData('state', 'win');
      return;
    }

    if (this.resultStatus == 'draw') {
      this.subtitleText = drawDescription.title;
      this.imagePath = drawDescription.image;
      this.localService.saveData('state', 'draw');
      return;
    }

    this.localService.saveData('state', 'fail');
    this.subtitleText = failDescription.title;
    this.imagePath = failDescription.image;

  };

  public openHistoryDialog(): void {
    let dialog;

    dialog = this.matDialog.open(HistoryComponent, {
      panelClass: 'app-history',
      data: {},
      autoFocus: false,
      width: '800px',
    });

  }

}

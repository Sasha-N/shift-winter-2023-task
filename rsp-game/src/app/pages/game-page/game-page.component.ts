import { Component, OnInit } from '@angular/core';
import { baseCardDeck } from '../../constants/constants';
import { winСombinations } from '../../constants/constants';
import { GameStatusService } from '../../providers/game-status.service';
import { ApiService } from '../../providers/api.service';
import { Router } from '@angular/router';
import { pagesRoutes } from '../../constants/constants';
import { MatDialog } from '@angular/material/dialog';
import { AddNameDialogComponent } from '../add-name-dialog/add-name-dialog.component';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  public playersCard: string = '';
  public botChoise: string = '';
  public playersName: string = 'Player1';

  constructor(private gameStatusService: GameStatusService, private apiService: ApiService, private router: Router, public matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  public playerChooses(item: string): void {
    this.playersCard = item;
  }

  public pickingWinner(playersCard: string, botCard: string) {

    if (playersCard == botCard) {
      this.gameStatusService.set('draw');
      return;
    };

    if (winСombinations[playersCard] == botCard) {
      this.gameStatusService.set('win');
      return;
    }

    this.gameStatusService.set('fail');
  }

  public play(): void {
    this.apiService.addOptions(baseCardDeck).subscribe((result) => {
      if (result) {
        this.botChoise = result.result;

        this.gameStatusService.setCards(this.playersCard, this.botChoise);

        this.pickingWinner(this.playersCard, this.botChoise);

        this.router.navigate(['/' + pagesRoutes[1]]);

      }
    },
      (error) => {
        console.log(error)
      },
      () => { }
    );
  }

  public openAddNameDialog(): void {
    let dialog;

    dialog = this.matDialog.open(AddNameDialogComponent, {
      panelClass: 'add-name-dialog',
      data: {},
      autoFocus: false,
      width: '800px',
    });

    dialog.afterClosed().subscribe((data) => {
      if (!data) {
        return;
      }
      this.playersName = data;
    });
  }

}

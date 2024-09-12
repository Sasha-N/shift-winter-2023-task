import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/providers/local.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  public gameDate: string | null = '';
  public playersName: string | null = '';
  public gameState: string | null = '';

  constructor(private localService: LocalService) { }

  ngOnInit(): void {
    this.gameDate = this.localService.getData('date');
    this.playersName = this.localService.getData('name');
    this.gameState = this.localService.getData('state')
  }

}

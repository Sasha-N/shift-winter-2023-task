import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss']
})
export class CreateCardComponent implements OnInit {
  public cardname: string = "";
  public visibleCards: any[] = [];
  public page: number = 0;
  public size: number = 1;

  public defaultCards = [
    { id: 1, url: '../../../assets/picture-icons/add_photo_alternate_FILL0_wght400_GRAD0_opsz48.png' },
    { id: 2, url: './../../assets/cards/paper.png' },
    { id: 3, url: './../../assets/cards/scissor.png' },
    { id: 4, url: './../../assets/cards/rock.png' }
  ];

  constructor() { }

  ngOnInit(): void {
    this.changePage({ pageIndex: this.page, pageSize: this.size });
  }

  //переписать
  public saveName(): void {
    this.cardname = (<HTMLInputElement>document.getElementById("cardname")).value;
  }

  public changePage(state: any): void {
    let index = 0;
    let startingIndex = state.pageIndex * state.pageSize;
    let endingIndex = startingIndex + state.pageSize;

    this.visibleCards = this.defaultCards.filter(() => {
      index++;
      return (index > startingIndex && index <= endingIndex) ? true : false;
    });
  }

}

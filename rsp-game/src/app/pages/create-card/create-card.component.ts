import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss']
})
export class CreateCardComponent implements OnInit {
  public cardname: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public saveName() {
    this.cardname = (<HTMLInputElement>document.getElementById("username")).value;
  }

}

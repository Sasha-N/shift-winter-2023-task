import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

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
    this.cardname = (<HTMLInputElement>document.getElementById("cardname")).value;
  }

  @ViewChild('paginator') paginator: MatPaginator | undefined;
  @ViewChild('paginatorPageSize') paginatorPageSize: MatPaginator | undefined;

}

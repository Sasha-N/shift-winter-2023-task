import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-name-dialog',
  templateUrl: './add-name-dialog.component.html',
  styleUrls: ['./add-name-dialog.component.scss']
})
export class AddNameDialogComponent implements OnInit {
  public myusername: string = "";

  constructor(private matDialogRef: MatDialogRef<AddNameDialogComponent>) { 
  }

  ngOnInit(): void {
  }

  public saveName() {
    this.myusername = (<HTMLInputElement>document.getElementById("username")).value;
    this.matDialogRef.close(this.myusername);
  }

}

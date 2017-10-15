import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ExampleDialogComponent } from '../../dialogs/example-dialog/example-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(public dialog: MatDialog) { }

  foods = [
    { value: '0', viewValue: 'Steak' },
    { value: '1', viewValue: 'Pizza' },
    { value: '2', viewValue: 'Tacos' }
  ];

  openDialog(): void {
    let dialogRef = this.dialog.open(ExampleDialogComponent, {
      width: '400px', 
      data: {}
    });
  }
}

import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
 
import { ExampleDialogComponent } from '../../dialogs/example-dialog/example-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  isDarkTheme: boolean = true;

  constructor(public dialog: MatDialog) { 
    this.isDarkTheme = !document.getElementsByTagName('body')[0].classList.contains('light-theme');
  }

  foods = [
    { value: '0', viewValue: 'Steak' },
    { value: '1', viewValue: 'Pizza' },
    { value: '2', viewValue: 'Tacos' }
  ];

  switchTheme(event: any) {
    let body = document.getElementsByTagName('body')[0];
    this.isDarkTheme = event.checked;
    
    if (this.isDarkTheme)
      body.classList.remove("light-theme");
    else
      body.classList.add("light-theme");

  }

  openDialog(): void {
    this.dialog.open(ExampleDialogComponent);
  }
}

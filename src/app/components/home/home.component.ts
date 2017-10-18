import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { ExampleDialogComponent } from '../../dialogs/example-dialog/example-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(private dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(ExampleDialogComponent);
  }
}

import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-example-dialog',
  templateUrl: './example-dialog.component.html'
})
export class ExampleDialogComponent {

  constructor(public dialogRef: MatDialogRef<ExampleDialogComponent>) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

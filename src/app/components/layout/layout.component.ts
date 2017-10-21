import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ExampleDialogComponent } from '../../dialogs/example-dialog/example-dialog.component';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent {

  constructor(private dialog: MatDialog) { }
  
    openDialog(): void {
      this.dialog.open(ExampleDialogComponent);
    }

}

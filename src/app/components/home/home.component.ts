import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { ExampleDialogComponent } from '../../dialogs/example-dialog/example-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  barChartData: Array<any> = [[ 10, 100, 154, 184, 476, 95, 133, 408, 619, 363 ]];
  barChartLabels: Array<any> = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct' ];
  barChartColors = [{ backgroundColor: 'rgba(0, 156, 228, 0.80)' }]
  
  lineChartData: Array<any> = [[10, 30, 33, 80, 87, 101, 112]];
  lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  lineChartColors = [{ backgroundColor: 'rgba(0,0,0,0.0)', borderColor: 'rgba(92, 184, 92, 0.8)' }]

  versionsData: Array<any> = [[ 2, 1, 2, 1, 1, 8, 2, 2, 1, 1, 1, 12, 26, 8, 17, 6, 4, 54, 34 ]];
  versionsLabels: Array<any> = [ '0.9.5.0', '1.2.0.0', '1.3.1.0', '1.4.0.0', '1.6.0.0', '1.7.0.0', '1.7.1.0', '1.8.0.0', '1.9.0.0', '1.10.0.0', '1.10.1.1', '1.11.0.0', '1.12.0.0', '1.13.0.0', '1.13.1.0', '1.13.2.0', '1.13.3.0', '1.14.0.0', '1.14.1.0' ];

  chartOptions = {
    bezierCurve: false,
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      line: {
        tension: 0
      }
    },
    legend: {
      display: false
    }
  };

  constructor(private dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(ExampleDialogComponent);
  }
}

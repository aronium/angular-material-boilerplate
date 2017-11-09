import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { UserService } from '../services';
import { ConfirmDialogComponent } from '../../dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  providers: [ UserService ]
})
export class UserDetailsComponent implements OnInit {
  user: any;

  constructor(private route: ActivatedRoute, private service: UserService, private dialog: MatDialog) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
        let id = params['id'];
        this.getUser(id);
    });
  }

  private getUser(id: any){
    this.service.getUser(id).subscribe(data => this.user = data);
  }

  onDelete(): void {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { title: 'Delete user', message: 'Are you sure you want to delete selected user?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}

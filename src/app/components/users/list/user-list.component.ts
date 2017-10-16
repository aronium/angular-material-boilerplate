import { Component, OnInit } from '@angular/core';
import { UserService } from '../services';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  providers: [ UserService ]
})
export class UserListComponent implements OnInit {

  users: Array<any>;

  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.getUsers().subscribe(data => {
      this.users = data
    });
  }
}

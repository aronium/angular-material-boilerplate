import { Component, OnInit } from '@angular/core';

import { UserService } from '../services';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  providers: [UserService]
})
export class UserListComponent implements OnInit {

  users: Array<any>;
  private allUsersChecked: boolean = false;

  constructor(private service: UserService) { }

  ngOnInit() {
    this.loadUsers();
  }

  private loadUsers(): void{
    this.service.getUsers().subscribe(data => {
      this.users = data
    });
  }

  onRefresh(){
    this.users = null;

    this.loadUsers();
  }

  checkAll() {
    this.allUsersChecked = !this.allUsersChecked;
    for (let i in this.users) {
      this.users[i].selected = this.allUsersChecked;
    }
  }
}

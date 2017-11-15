import { Component, OnInit } from '@angular/core';

import { UserService } from '../services';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  providers: [UserService]
})
export class UserListComponent implements OnInit {

  private allUsersChecked: boolean = false;
  
  users: Array<any>;
  isAdvancedSearchEnabled: boolean = false;
  email:string;
  startDate: Date = null;
  endDate:Date = null;
  state:string;
  states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

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

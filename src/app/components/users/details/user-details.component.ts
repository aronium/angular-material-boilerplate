import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../services';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  providers: [ UserService ]
})
export class UserDetailsComponent implements OnInit {
  user: any;

  constructor(private route: ActivatedRoute, private service: UserService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
        let id = params['id'];
        this.getUser(id);
    });
  }

  private getUser(id: any){
    this.service.getUser(id).subscribe(data => this.user = data);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../../services';
import { User } from '../../models';

export enum EditMode {
   Create = 0,
   Edit = 1
}

@Component({
  selector: 'app-create-edit-user',
  templateUrl: './create-edit-user.component.html',
  providers: [ UserService ]
})
export class CreateEditUserComponent implements OnInit {
  user: User;
  editMode: EditMode = EditMode.Create;

  constructor(private route: ActivatedRoute, private service: UserService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
        let id = params['id'];
        if(id){
          this.editMode = EditMode.Edit;
          this.getUser(id);
        }
        else{
          this.editMode = EditMode.Create;
          this.user = new User();
        }
    });

    console.log('EditMode', EditMode[this.editMode], this.editMode);
  }

  private getUser(id: any){
    this.service.getUser(id).subscribe(data => this.user = data);
  }

  onSave(){
    console.log(this.user);
  }
}

import { Component, OnInit, Input } from '@angular/core';

import { UserService } from '../../services/user.service';
import { user } from '../../model/user';
import { AngularFireList } from '@angular/fire/database/database';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {
  
  listU: AngularFireList<user> = null;
  @Input() user: user;

  constructor (private userService: UserService){
    this.listU = userService.listUser;
  }

  ngOnInit(): void {
  }

  updateStatus(status: boolean) {
    this.userService
      .updateUser(this.user.key, { status: status })
      .catch(err => console.log(err));
  }
 
  deleteUser() {
    this.userService
      .deleteUser(this.user.key)
      .catch(err => console.log(err));
  }

}

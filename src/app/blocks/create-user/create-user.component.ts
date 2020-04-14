import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { user } from '../../model/user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: user = new user();
  submitted = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  newUser(): void {
    this.submitted = false;
    this.user = new user();
  }
 
  save() {
    this.userService.createUser(this.user);
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }
}

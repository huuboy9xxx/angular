import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { user } from '../model/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  listUser: AngularFireList<user> = null;
  private dbPath = "users";

  constructor(private db: AngularFireDatabase) {
    this.listUser = db.list(this.dbPath);
  }

  createUser(user: user): void {
    this.listUser.push(user);
  }
 
  updateUser(key: string, value: any): Promise<void> {
    return this.listUser.update(key, value);
  }
 
  deleteUser(key: string): Promise<void> {
    return this.listUser.remove(key);
  }
 
  getUsersList(): AngularFireList<user> {
    return this.listUser;
  }
 
  deleteAll(): Promise<void> {
    return this.listUser.remove();
  }
}

import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {User} from "../models/user.model";
import {ActivatedRoute,Router} from "@angular/router";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  users?: User[];
  currentUser: User = {};
  currentIndex = 1;
  username = '';

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
    this.retrieveUsers();
  }

  retrieveUsers(): void{
    this.userService.getAll().subscribe(
      data => {
        this.users = data;
      },
      err => {
        this.users = JSON.parse(err.error).message;
      }
    );
  }

  setActiveUser(user: User, index: number): void {
    this.currentUser = user;
    this.currentIndex = index;
  }

  refreshList(): void {
    this.retrieveUsers();
    this.currentUser = {};
    this.currentIndex = -1;
  }

  deleteUser():void {
    this.userService.delete(this.currentUser.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }
}

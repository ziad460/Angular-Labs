import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/Services/user-service.service';
import { IUser } from "../Shared/Shared";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  allUsers:IUser[] = [];

  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      data => {
        this.allUsers = data;
      },
      errorMsg =>
      {
        alert(errorMsg);
      })
  }
}

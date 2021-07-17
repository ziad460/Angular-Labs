import { Component, OnInit } from '@angular/core';
import { User } from '../Shared/Shared';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  socialSites=["Facebook","Google","Twitter"];

  constructor() { }

  userModel = new User("","","","","");
  
  ngOnInit(): void {
  }

}

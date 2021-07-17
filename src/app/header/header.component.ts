import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  image:string = "../../assets/Images/3.jpg";

  @Input() clientName:string = "";

  @Output() newClientName = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  setClientName(value:string)
  {
    this.newClientName.emit(value);
  }

}

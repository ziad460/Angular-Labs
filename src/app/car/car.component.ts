import { Component, OnInit } from '@angular/core';
import { CarServiceService } from 'src/Services/car-service.service';
import { ICar } from '../Shared/Shared';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  carList:ICar[] ;
  searchedName:string = "";
  constructor(private myCar:CarServiceService) { 
    this.carList = [];
  }
  
  ngOnInit(): void {
    this.carList = this.myCar.displayAllCars();
  }
  searchByName(name:string)
  {
    this.searchByName(name);
  }
  changeList()
  {
    if(this.searchedName != "")
    {
      this.carList = this.myCar.displayCarByName(this.searchedName);
    }
  }
}
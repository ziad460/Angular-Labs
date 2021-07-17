import { Injectable } from '@angular/core';
import { ICar } from 'src/app/Shared/Shared';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

  constructor() { }

  displayAllCars():ICar[]
  {
    return [
      {name:"Car1" , color:"blue" , speed: 200 , type:"Kia"},
      {name:"Car2" , color:"Red" , speed: 300 , type:"PMW"},
      {name:"Car3" , color:"White" , speed: 400 , type:"Logan"},
      {name:"Car4" , color:"balck" , speed: 500 , type:"Lamborgyne"},
    ]
  }
  displayCarByName(name:string)
  {
    let arr:ICar[] = [];
    for (const iterator of this.displayAllCars()) {
      if(iterator.name == name)
      {
        arr.push(iterator);
      }
    }
    return arr;
  }

}


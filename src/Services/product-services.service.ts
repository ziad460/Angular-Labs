import { Injectable } from '@angular/core';
import { IProduct } from "../app/Shared/Shared";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {

  constructor(private _http:HttpClient) { }

  getAllProducts()
  {
    return [
      { ID: 1, name:"Product1" , Quantity: 10, Price: 100, image:"../assets/Images/1.jpg" },
      { ID: 2, name:"Product2" , Quantity: 20, Price: 200, image:"../assets/Images/2.jpg"},
      { ID: 3, name:"Product3" , Quantity: 30, Price: 300, image:"../assets/Images/3.jpg" }
    ];
  }
  getProductById(prdId:number)
  {
    let product = this.getAllProducts().find(m => m.ID == prdId);
    if (product == null)
    {
      return null;
    }
    else if (isNaN(prdId))
    {
      return null;
    }
    return product;
  }

}


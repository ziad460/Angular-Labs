import { Component, OnInit } from '@angular/core';
import { ProductServicesService } from 'src/Services/product-services.service';
import { IProduct } from '../Shared/Shared';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behaviour-service-demo',
  templateUrl: './behaviour-service-demo.component.html',
  styleUrls: ['./behaviour-service-demo.component.scss']
})
export class BehaviourServiceDemoComponent implements OnInit {
  product:IProduct = {ID:1 , name:"Ziad" , Quantity:3 , Price:200 , image:"1.jpg"};
  constructor(private prodService:ProductServicesService) { }

  increaseTax$ = new BehaviorSubject(this.product);
  
  ngOnInit(): void {
    this.increaseTax$.subscribe(val => {
      val.Price = (10*val.Price)/100;
    },
    errorMsg => {
      alert(errorMsg);
    })
  }
  increasePriceWithTax(id:number)
  {
    let prod = this.prodService.getProductById(id)!;
    alert(`The new value of price after increasing is ${this.increaseTax$.next(prod)}`);
    // alert(this.increaseTax$);
  }
}

import { Component, OnInit } from '@angular/core';
import { discountOffers , ICategory, IProduct } from "../Shared/Shared";
import { ProductServicesService } from 'src/Services/product-services.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  discount:discountOffers ;
  storeName:string ;
  storeLogo:string ;
  productList:IProduct[] ;
  categoryList:ICategory[] ;
  clientName:string ;
  isPurchased:boolean ;
  constructor(private prodService:ProductServicesService) 
  {
    this.discount = discountOffers.littleDiscount;
    this.storeName = "MyShop";
    this.storeLogo = "../../assets/Images/1.jpg";
    this.productList = [];
    this.categoryList = [
      {
        ID: 1,
        name:"Mens"
      },
      {
        ID: 2,
        name:"Womens"
      },
      {
        ID: 3,
        name:"Kids"
      }
    ];
    this.clientName = "Ziad Ahmed";
    this.isPurchased = true;
  }
  mySubject$ = new BehaviorSubject(this.prodService.getAllProducts());
  
  ngOnInit(): void {
  }
  purchasing()
  {
    this.isPurchased= false;
  }
  renderValues()
  {
     this.productList = this.mySubject$.getValue()
  }
}
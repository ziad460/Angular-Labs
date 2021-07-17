import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-with-out-discount',
  templateUrl: './product-with-out-discount.component.html',
  styleUrls: ['./product-with-out-discount.component.scss']
})
export class ProductWithOutDiscountComponent implements OnInit {

  prodWithoutDiscount=[
    {
      ID: 1,
      Name: "Note 10",
      Img: "../../assets/Images/Note10.jpg",
      Price: 5500,
      Quantity: 3
    },
    {
      ID: 2,
      Name: "iphone 8",
      Img: "../../assets/Images/iphone8.jpg",
      Price: 8500,
      Quantity: 5
    },
    {
      ID: 3,
      Name: "iphone X",
      Img: "../../assets/Images/iphoneX.jpg",
      Price: 15200,
      Quantity: 7
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

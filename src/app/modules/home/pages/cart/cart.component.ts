import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/entity/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
cart:Array<Product>;

  constructor() {
   
  
  }

  ngOnInit() {
   var storedCart = JSON.parse(localStorage.getItem("cart"));
   this.cart =  storedCart
  }

  remove(index){
    this.cart.splice(index,1);
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  goToCheckout(){
    
  }

}

import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/entity/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   
  constructor() {

   }

  ngOnInit() {
  }

  getCount(){
    var storedCart:Array<Product> = JSON.parse(localStorage.getItem("cart"));
    if(!(storedCart === null)){
            return storedCart.length
    }else{
      return 0;
    }
}

}

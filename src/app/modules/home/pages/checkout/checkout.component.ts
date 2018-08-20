import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import { Product } from 'src/app/core/entity/product';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


  order: any = {};

  deliveryHour = ["8:00", "9:00", "10:00", "11:00", "12:00",
    "14:00", "15:00 ", "16:00", "17:00", "18:00"];

  idCardTypes = ['Cédula de ciudadanía', 'Tarjeta de identidad',
    'Pasaporte', 'Cédula de extranjería'];

  constructor(private calendar: NgbCalendar, private router:Router) { }

  /**
   * Setup product quantity and total of order from local storage
   */
  ngOnInit() {
    var storedCart: Array<Product> = JSON.parse(localStorage.getItem("cart"));
    this.order.productQuantity = storedCart.length
    let acc = Number(0);
    storedCart.forEach(function (element) {
      acc = acc + Number(element.price);
    });
    this.order.total = acc.toFixed(3);
  }

  onSubmit() {
    if (this.order.name === undefined || this.order.name === "") {
      alert("Debe ingresar un nombre");
      return false;
    }
    if (this.order.idCardType === undefined || this.order.idCardType === "") {
      alert("Debe ingresar un tipo de documento");
      return false;
    }
    if (this.order.idCard === undefined || this.order.idCard === "") {
      alert("Debe ingresar un número de identificación");
      return false;
    }
    if (this.order.deliveryDate === undefined || this.order.deliveryDate === "") {
      alert("Debe ingresar una fecha de entrega");
      return false;
    }
    if (this.order.address === undefined || this.order.address === "") {
      alert("Debe ingresar una dirección");
      return false;
    }
    
    localStorage.setItem("cart", null);
    this.router.navigateByUrl('/thanks');
  }

}

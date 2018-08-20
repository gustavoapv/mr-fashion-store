import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/entity/product';
import { PRODUCTS } from 'src/app/core/mocks/mock-product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {

  products: Array<Product> = PRODUCTS;

  constructor(private router: Router) {

  }
  ngOnInit() {
    this.products = this.products.filter(p => (p.category.includes(this.router.url.replace("/", ""))))
  }

  addToCart(product: Product) {
    var storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart === null) {
      var cart: Array<Product> = [];
      localStorage.setItem("cart", JSON.stringify(cart));
      storedCart = JSON.parse(localStorage.getItem("cart"));
    }
    storedCart.push(product);
    localStorage.setItem("cart", JSON.stringify(storedCart));

  }

}

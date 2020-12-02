import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  
 
  productsInCart = [];

  constructor() { }

  ngOnInit() {
  }

  handleProductToCart(product){
    console.log(product);
    let productCloned = {...product};
    // this.productsInCart.push(event);

    let productFound = this.productsInCart.find(i => i.productName == product.productName)

    if(productFound){
      productFound.productCount = productFound.productCount + 1;
      productFound['totalAmount'] = productFound.productCount * productFound.productPrice; 
      //console.log(this.productsInCart);
      }
    else {
      this.productsInCart.push(product);
      //console.log(this.productsInCart);
    }
  }


}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() products;
  
  itemsInCart=[];
  isCartClicked = false;
  count = 0;
  totalCartAmount = 0;

  constructor(private router: Router,private sharedService: SharedService) { }

  ngOnInit() {
    
  }

  openCart(){
    this.isCartClicked = true;
    //this.totalCartAmount = 
  }

  closeCart(){
    this.isCartClicked = false;
  }

  onDeleteProduct(productToDelete){
    this.products.splice(productToDelete,1);
  }

  onCountUp(product){
    let foundProduct = this.products.find(i => i.productName === product.productName);
    //console.log(foundProduct);
    foundProduct.productCount = foundProduct.productCount + 1;
    foundProduct.totalAmount = foundProduct.productCount*foundProduct.productPrice;
    this.calculateTotal();
  }
  calculateTotal(){
    this.totalCartAmount = this.products.map(p=>p.totalAmount).reduce((a, b) => a + b, 0);
  
  }

  onCountDown(product){
    let foundProduct = this.products.find(i => i.productName === product.productName);
    //console.log(foundProduct);
    foundProduct.productCount = foundProduct.productCount - 1;
    foundProduct.totalAmount = foundProduct.productCount*foundProduct.productPrice;
    this.calculateTotal();
  }

  onCheckout(){
    this.sharedService.sendData(this.products)
    console.log(this.products);
    this.router.navigate(["/checkout"]);
  }

}

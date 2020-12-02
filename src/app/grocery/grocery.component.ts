import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent implements OnInit {

  @Output() public addProductToCart = new EventEmitter();

  productList:any;
  categories:any;
  productsByCat;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(`http://localhost:5000/categories`).subscribe(res => this.categories = res);
    this.getAllProducts();
  }

  getAllProducts(){
    this.http.get(`http://localhost:5000/products`).subscribe(res => this.productList = res);
  }

  getCategoryProducts(category){
    console.log(category);
    let url =`http://localhost:5000/products/search?category=${category.name}`
    console.log(url)
    this.http.get(url).subscribe(res => {this.productList = res});
  }

  handleAddToCart(event,product){
    //console.log(event,product);

    let item = {productCount:event,productName: product.name,productPrice: product.price};
    this.addProductToCart.emit(item);
  }
}

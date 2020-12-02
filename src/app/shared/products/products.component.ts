import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product = {"name":"","category":"","price":0};
  productList;
  message;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(`http://localhost:5000/products`).subscribe(res => this.productList = res);
  }

  onSubmit(value){
    console.log(value);
    this.http.post(`http://localhost:5000/products/add`,value).subscribe(res =>{
                                          console.log(res);
                                          value._id = res["_id"];
                                          this.productList.push(value);
                                          this.message = res;
                                        })
  }

  onDelete(productSelected){
    this.http.delete(`http://localhost:5000/products/${productSelected._id}`).subscribe(res =>{
                                            console.log(res);
                                            this.productList = this.productList.filter(product => product._id != productSelected._id);   
                                            this.message = res;  
                                          })
}

  onUpdate(product){
      //console.log(product);
      this.http.post(`http://localhost:5000/products/update/${product._id}`,product).subscribe(res => {console.log(res);this.message = res;});
      
  }

}

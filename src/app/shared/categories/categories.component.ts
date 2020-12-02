import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoryEntered;
  categories;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(`http://localhost:5000/categories`).subscribe(res => this.categories = res)
  }

  addCategory(value){
    console.log(this.categoryEntered);
    this.http.post(`http://localhost:5000/categories/add`,value).subscribe(res =>{
            console.log(this.categoryEntered);
            console.log(res);
            //this.categories.push(this.categoryEntered);
    } )
  }

}

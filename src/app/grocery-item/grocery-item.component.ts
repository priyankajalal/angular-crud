import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { GroceryItemService } from '../services/grocery-item.service';

@Component({
  selector: 'app-grocery-item',
  templateUrl: './grocery-item.component.html',
  styleUrls: ['./grocery-item.component.css']
})
export class GroceryItemComponent implements OnInit {

  @Input() product;
  @Output() public addToCartEvent: EventEmitter<any> = new EventEmitter<any>();

  itemInCart=0;

  constructor(private groceryItemService: GroceryItemService) { }

  ngOnInit() {
  }
  

  addProductToCart(){   
    this.addToCartEvent.emit(this.itemInCart = this.itemInCart + 1);
  }
}

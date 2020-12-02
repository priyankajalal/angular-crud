import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GroceryItemService {

  constructor() { }

  itemCount = 0;
  itemAdded = new Subject();

  updateCart(){
    this.itemAdded.next(this.itemCount + 1);
  }

}

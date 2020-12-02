import { Injectable } from '@angular/core';
import { Observable, Subject,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  subject = new BehaviorSubject<any>([]);

    sendData(products) {
        this.subject.next(products);
    }
}

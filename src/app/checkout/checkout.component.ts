import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  productsList:any;
  totalCartAmount = 0;

  constructor(private sharedService: SharedService) {
      //console.log(this.router.getCurrentNavigation().extras.state);  
      
    }

  ngOnInit() {   
    this.sharedService.subject.subscribe(res => {this.productsList = res;});     

    
  }
  
  onSubmit(form){
    console.log(form.value);
  }


}

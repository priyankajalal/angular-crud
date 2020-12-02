import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crud-operations',
  templateUrl: './crud-operations.component.html',
  styleUrls: ['./crud-operations.component.css']
})
export class CrudOperationsComponent  {

  title = 'app';
  recievedData:any;
  isLoading = false;

  constructor(private http: HttpClient){}

  onFetchPosts(){
    this.isLoading = true;
    this.http.get("http://localhost:5000/posts").subscribe(res => {
      this.recievedData = res; 
    this.isLoading = false;
  });
  
  }

  onAdd(postData){
    //console.log(postData);
    this.http.post(`http://localhost:5000/posts/add`,postData).subscribe(res => {
           console.log(res);
           postData._id = res["_id"];        
           console.log(postData);
           this.recievedData.push(postData);
    });
  }


  onDelete(postToDelete){
    console.log(`deleting post`);
    console.log(postToDelete);
    this.http.delete(`http://localhost:5000/posts/${postToDelete._id}`).subscribe(res => 
    
    {
      //console.log(res)
      this.recievedData = this.recievedData.filter(post => post._id != postToDelete._id);
      
    }
    );
    
    
  }

  onUpdate(postData){
    this.http.post(`http://localhost:5000/posts/update/${postData._id}`,postData).subscribe(
      res => {
        console.log(res);
        //this.recievedData = res;
        //this.onFetchPosts();
        
      }
      );
     
  }
}

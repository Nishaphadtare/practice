import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  apiURL = 'https://jsonplaceholder.typicode.com/';

  products = [
    {id: 101, name: 'TV'},
    {id: 102, name: 'Mobile'},
    {id: 103, name: 'Laptop'}
  ]
  constructor(private http: HttpClient) { }

  display(){
    alert('Subscribe Successfully')
  }
  //it will get thd users api data
  getUsersData(){
    let users = 'users';
    return this.http.get(this.apiURL+users);
  }
  getPostsData(){
    let posts = 'posts';
   return this.http.get(this.apiURL+posts)
  }
}

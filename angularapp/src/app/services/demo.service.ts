import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  apiURL = 'https://jsonplaceholder.typicode.com/users';

  products = [
    {id: 101, name: 'TV'},
    {id: 102, name: 'Mobile'},
    {id: 103, name: 'Laptop'}
  ]
  constructor(private http: HttpClient) { }

  display(){
    alert('Subscribe Successfully')
  }
  getUsersData(){
    return this.http.get(this.apiURL);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FireBasePost } from '../models/firebasepost';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  url = 'https://angular-crud-operation-37775-default-rtdb.firebaseio.com/';

  constructor(private _httpClientL: HttpClient) { }

  createPost(){
    let postData = {
      title : 'This  is angular 8 crud',
      content: 'This is firebase crud operation with post'
    }

   return this._httpClientL.post(this.url + 'posts.json', postData);
  }

   createPostDataReactive(fireBasePost: FireBasePost){
    return this._httpClientL.post(this.url + 'posts.json', fireBasePost);
   }
   getPostDataFirebase(){
    return this._httpClientL.get(this.url + 'post.json')
   }
}


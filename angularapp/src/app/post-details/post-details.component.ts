import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  constructor(private _postService : PostService, private route: ActivatedRoute) { }

  arrPost: any[] = [];
  ngOnInit() {
let id = this.route.snapshot.params['id'];
this._postService.getPostById(id).subscribe(res => {
  console.log('get post by id', res);
  this.arrPost.push(res);
  console.log('Array', this.arrPost);
  
})

  }
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

}

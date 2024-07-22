import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { RapidapiService } from '../services/rapidapi.service';

@Component({
  selector: 'app-rapidapi',
  templateUrl: './rapidapi.component.html',
  styleUrls: ['./rapidapi.component.css']
})
export class RapidapiComponent implements OnInit {


  constructor(private _rapidAPIService: RapidapiService,  private _firebaseService: FirebaseService) { }

  // apiNews:any=[];
  // apiQuote:any=[];
  ngOnInit() {
    this._rapidAPIService.getDataBBFinance().subscribe(res=>{
      console.log('Rapid API Finance Data',res);
//       this.apiNews=res.news;
//       console.log('Rapid API News Data',this.apiNews);
// this.apiQuote=res.quote;
// console.log('Rapid API Quote Data',this.apiQuote);

    })
  }
  CreatePost(){
    this._firebaseService.createPost().subscribe(res => {
      console.log('firebase post', res);
    })
  }
}

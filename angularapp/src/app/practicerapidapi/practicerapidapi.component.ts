import { Component, OnInit } from '@angular/core';
import { PracrapidapiService } from '../services/pracrapidapi.service';

@Component({
  selector: 'app-practicerapidapi',
  templateUrl: './practicerapidapi.component.html',
  styleUrls: ['./practicerapidapi.component.css']
})
export class PracticerapidapiComponent implements OnInit {

  constructor(private _pracrapidAPIService: PracrapidapiService) { }

  ngOnInit() {
    this._pracrapidAPIService.getMarkeFullData().subscribe(res=>{
      console.log('market full data', res);
      
    })
  }

}

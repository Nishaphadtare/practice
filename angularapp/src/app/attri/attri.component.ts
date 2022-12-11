import { Component, OnInit } from '@angular/core';
import { Builder } from 'protractor';

@Component({
  selector: 'app-attri',
  templateUrl: './attri.component.html',
  styleUrls: ['./attri.component.css']
})
export class AttriComponent implements OnInit {
  uname ;
  colorVal ='blue';
  people:any[] = [
    {
      "name": "Jack",
      "country": "UK"
    },
    {
      "name": "Sumit",
      "country": "USA"
    },
    {
      "name": "Anup",
      "country": "HK"
    },
    {
      "name": "coidemind",
      "country": "UK"
    },
    {
      "name": "Surya",
      "country": "USA"
    }
  ]

  constructor() { }

  ngOnInit() {
  }
  show(value)
  {
    this.uname= value;
    // console.log(value.target.value);
    
  }

}

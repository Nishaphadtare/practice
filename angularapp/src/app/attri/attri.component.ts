import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'app-attri',
  templateUrl: './attri.component.html',
  styleUrls: ['./attri.component.css']
})
export class AttriComponent implements OnInit {

colorVal = 'blue';
uname : string;
people : any []= [
  {
    "name": 'Vicky',
    "city": 'Solapur'
  },
  {
    "name": 'Sneha',
    "city": 'Pune'
  },
  {
    "name": 'Nisha',
    "city": 'Mumbai' 
  },
  {
    "name": 'Nikhil',
    "city": 'Solapur'
  }
 
]

  constructor() { }

  ngOnInit() {
  }

  show(value){
    
    this.uname = value;
    
  }
}

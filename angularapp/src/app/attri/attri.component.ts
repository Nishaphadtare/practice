import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attri',
  templateUrl: './attri.component.html',
  styleUrls: ['./attri.component.css']
})
export class AttriComponent implements OnInit {

colorVal = 'blue';

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

}

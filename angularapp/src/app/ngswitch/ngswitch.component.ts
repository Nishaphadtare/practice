import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {

productName : string;
  
  constructor() { }

  ngOnInit() {
  }
 
  getProductValue(value){
    console.log(value.target.value);
    this.productName = value.target.value;
    
  }
    
  }
  



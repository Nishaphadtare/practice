import { Component, OnInit } from '@angular/core';
import { ExecOptionsWithStringEncoding } from 'child_process';
import { Button } from 'protractor';
import { Product } from '../models/product';

@Component({
  selector: 'app-docheckassig',
  templateUrl: './docheckassig.component.html',
  styleUrls: ['./docheckassig.component.css']
})
export class DocheckassigComponent implements OnInit {

  showSecret : false;
  name:string;
  data :any[] = [];
  

 
  constructor() { }
 
  ngOnInit() {
  }
  
  add(i){
    this.data.push({name:i});
  }

  
  // onclick() {
  //   this.name = this.name;
  //   this.data.push(this.data.length+0)
  // }
  remove(indexValue) {
    this.data.splice(indexValue)
    // this.add.pop(employee.target.value);
  }
 
  
  }

  
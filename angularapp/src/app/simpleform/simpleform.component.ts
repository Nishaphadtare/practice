import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css']
})
export class SimpleformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Onsubmit(form: NgForm){
    console.log(form);
    
  }

}

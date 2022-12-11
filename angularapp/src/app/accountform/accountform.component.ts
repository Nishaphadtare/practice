import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-accountform',
  templateUrl: './accountform.component.html',
  styleUrls: ['./accountform.component.css']
})
export class AccountformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form: NgForm){
    console.log(form);
    
  }

}

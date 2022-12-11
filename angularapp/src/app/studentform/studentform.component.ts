import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css']
})
export class StudentformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  Onsubmit(form: NgForm){
    console.log(form);
    
  }

}

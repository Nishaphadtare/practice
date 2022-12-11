import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  name: string= "Employee";
  password: string ="123456"

  onRset(){
    this.name=" ";
    this.password= " ";
  }
  OnSubmit(){
    this.name=" ";
    this.password= " ";
  }
  constructor() { }

  ngOnInit() {
  }

}

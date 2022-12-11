import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputdec',
  templateUrl: './inputdec.component.html',
  styleUrls: ['./inputdec.component.css']
})
export class InputdecComponent implements OnInit {

  @Input() employee : any ;
  constructor() { }

  ngOnInit() {
    console.log('from Parent', this.employee);
    
  }

}

import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  // @Input() myInputMsg : string;
  @Input() employeeName : string;
  @Output() foodevent: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    // console.log('From parent', this.myInputMsg);
        console.log('From parent', this.employeeName);
  }

  // step: - Function call once user enter text box value
  addtofood(value){
//foodevent is nothing but our cuatom event
    this.foodevent.emit(value);
  }
    
  }



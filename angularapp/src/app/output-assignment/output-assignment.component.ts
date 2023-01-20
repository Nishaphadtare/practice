import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Student } from '../models/student';


@Component({
  selector: 'app-output-assignment',
  templateUrl: './output-assignment.component.html',
  styleUrls: ['./output-assignment.component.css']
})
export class OutputAssignmentComponent implements OnInit {

  @Output() studentEvent : EventEmitter<Object> = new EventEmitter<Object>();
  student : Student[] = [];

  constructor() { 
    this.student.push({rollNo: '101', firstName:'Sneha', lastName: 'Phadtare', course: 'MCom'});
    this.student.push({rollNo: '101', firstName:'Nisha', lastName: 'Kate',     course: 'Angular'});
    this.student.push({rollNo: '101', firstName:'Nikhil',lastName: 'Phadtare', course: 'Angular'});
    this.student.push({rollNo: '101', firstName:'Vicky', lastName: 'Phadtare', course: 'Msc'});

  }

  ngOnInit() {
  }

  Information(){
    this.studentEvent.emit(this.student)
    
  }
}

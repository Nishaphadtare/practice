import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitchassign',
  templateUrl: './ngswitchassign.component.html',
  styleUrls: ['./ngswitchassign.component.css']
})
export class NgswitchassignComponent implements OnInit {

  selectCourses: string;
  constructor() { }

  ngOnInit() {
  }

  getCourseValue(value) {
    console.log(value.target.value);
    this.selectCourses=value.target.value;
  }
}

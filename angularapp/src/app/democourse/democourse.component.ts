import { Component, OnInit } from '@angular/core';
import { Courses } from '../collgeinfo/courses';

@Component({
  selector: 'app-democourse',
  templateUrl: './democourse.component.html',
  styleUrls: ['./democourse.component.css']
})
export class DemocourseComponent implements OnInit {
  
  isShow: boolean = true;
  title: string = 'All Courses Info';
  courses: Courses [] = [
    {courseName: 'HTML' , courseFees: '10,000', courseDuration: '2 Months', courseType: 'Online' },
    {courseName: 'CSS', courseFees: '15,000', courseDuration: '3 Months', courseType: 'Online' },
    {courseName: 'JavaScript', courseFees: '20,000', courseDuration: '5 Months', courseType: 'Offline'},
    {courseName: 'Angular', courseFees:'30,000', courseDuration: '6 Months', courseType: 'Offline'}
  ]
  constructor() { }

  ngOnInit() {
  }

}

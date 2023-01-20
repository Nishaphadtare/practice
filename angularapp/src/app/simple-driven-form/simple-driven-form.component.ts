import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee1 } from '../models/employees';

@Component({
  selector: 'app-simple-driven-form',
  templateUrl: './simple-driven-form.component.html',
  styleUrls: ['./simple-driven-form.component.css']
})
export class SimpleDrivenFormComponent implements OnInit {

  defaultValue : string = 'Mumbai';
  employee = new Employee1();
  submitted:boolean = false;
 defaultGender: string = 'Female';
  genders = [
    {id: '1', value: 'Male'},
    {id: '2', value: 'Female'}

  ]
  constructor() { }

  ngOnInit() {
  }
  Onsubmit(form: NgForm){
    this.submitted = true;
   this.employee.firstname = form.value.userDetails.firstname;
   this.employee.lastname = form.value.userDetails.lastname;
    this.employee.username = form.value.userDetails.username;
    this.employee.password = form.value.userDetails.password;
    this.employee.email = form.value.userDetails.email;
    this.employee.mobileNo = form.value.userDetails.mobileNo;
    this.employee.city = form.value.city;
    this.employee.gender = form.value.gender;
    form.reset();
    form.controls['city'].setValue('Mumbai');
    form.controls['gender'].setValue('Female');
    console.log(form.controls);
    
// this.saveEmployeeData(this.employee)

  }
  saveEmployeeData(emp: Employee1){
console.log(emp.firstname);
console.log(emp.lastname);
console.log(emp.username);
console.log(emp.password);
console.log(emp.email);
console.log(emp.mobileNo);
console.log(emp.city);

  }
}

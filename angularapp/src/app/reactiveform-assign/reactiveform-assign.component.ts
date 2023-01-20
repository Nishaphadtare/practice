import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactiveform-assign',
  templateUrl: './reactiveform-assign.component.html',
  styleUrls: ['./reactiveform-assign.component.css']
})
export class ReactiveformAssignComponent implements OnInit {

  myReactiveForm : FormGroup;
  notAllowedNames = ['Codemind', 'Technology'];
  genders = [
    {id: '1', value:'Female'},
    {id: '2', value:'Male'},
    {id: '3', value:'Other'}
  ]
  constructor() { 
    this.creates();
  }

  ngOnInit() {
    // setTimeout(() => {
    //   this.myReactiveForm.setValue({
    //     'employeeDetails' : {
    //       'firstname' : 'Nikhil',
    //       'lastname' : 'Phadtare',
    //       'email' : 'nikhilPhadtare@gmail.com'
    //     },
    //     'password' : ' ',
    //     'mobile' : ' ',
    //     'gender' : 'Female',
    //     'country': 'India'
    //   })
    // }, 3000)
    setTimeout(() => {
      this.myReactiveForm.setValue({
        'employeeDetails' : {
          'firstname' : 'Nikhil',
          'lastname' : 'Phadtare',
          'email' : 'nikhilPhadtare@gmail.com'
        }
      })
      }, 3000)
  }
  creates(){
    this.myReactiveForm = new FormGroup({
      'employeeDetails' : new FormGroup({
        'firstname' : new FormControl('', [Validators.required, this.NaNames.bind(this)]),
        'lastname' : new FormControl('', [Validators.required, Validators.email], this.NaEmail),
        'email' : new FormControl('', Validators.required)
      }),
      'password' : new FormControl('', Validators.required),
      'mobile' : new FormControl('', Validators.required),
      'gender' : new FormControl('Female'),
      'country' : new FormControl('India')
    })
  }
  OnSubmit(){
 console.log(this.myReactiveForm);
 
  }
  NaNames(control:FormControl){
    if (this.notAllowedNames.indexOf(control.value) !== -1) {
     return {'notAllowedNames': true}
    }
    return null;
   }
   NaEmail(control: FormControl) : Promise<any> | Observable<any> {
    const myResponseIs = new Promise<any> ((resolve, reject)=> {
      setTimeout(()=> {
        if (control.value === 'codemindtechnology@gmail.com') {
          resolve({'emailNotAllowed': true})
        }else {
          return (null)
        }
      }, 4000)
    })
    return myResponseIs;
   }
}

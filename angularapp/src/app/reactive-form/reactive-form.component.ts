import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FireBasePost } from '../models/firebasepost';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
myReactiveForm: FormGroup;
notAllowedNames = ['Codemind', 'Technology'];
submitted : boolean = false;
genders = [
  {id: '1', value:'Female'},
  {id: '2', value:'Male'}
]
firebasePost: FireBasePost;
  constructor(private _fb: FormBuilder, private _firebaseService: FirebaseService) {
    this.createForm();
   }

  ngOnInit() {
//  setTimeout(()=> { 
//     this.myReactiveForm.setValue({
//       'userDetails' : {
//         'username' :'CodemindTechnology',
//         'email' : 'test@gmail.com'
//     },
//       'course' : 'Angular',
//       'gender': 'Female'
   
//   })
//   },2000)
setTimeout(()=> { 
      this.myReactiveForm.patchValue({
        'userDetails' : {
          'username' :'CodemindTechnology',
          'email' : 'test@gmail.com'
      }
})
}, 3000);
}



  createForm(){

    this._firebaseService.getPostDataFirebase().subscribe(res => {
      console.log('get data From Firebase', res);
      
    })
    // this.myReactiveForm = new FormGroup({
    //   'userDetails' : new FormGroup({
    //     'username' : new FormControl('', [Validators.required, this.NaNames.bind(this)]),
    //     'email' : new FormControl('', [Validators.required, Validators.email], this.NaEmails)
    //   }),
    //   'course' : new FormControl('Angular'),
    //   'gender': new FormControl('Female'),
    //   'skills' : new FormArray([
    //     new FormControl(null, Validators.required)
    //   ])
    // })
    
    this.myReactiveForm = this._fb.group({
      userDetails: this._fb.group({
        username: ['', Validators.required],
        email: ['', Validators.required]
      }),
      course: ['Angular'],
      gender: ['Female'],
      skills: this._fb.array([])
    })
  }
  OnSubmit(){
    this.submitted = true;
    console.log(this.myReactiveForm);
    console.log(this.myReactiveForm['controls'].userDetails['controls'].username.value);
    
    this.firebasePost = new FireBasePost();
    this.firebasePost.username = this.myReactiveForm['controls'].userDetails['controls'].username.value;
    this.firebasePost.email = this.myReactiveForm['controls'].userDetails['controls'].email.value;
    this.firebasePost.course = this.myReactiveForm['controls'].course.value;
    this.firebasePost.gender = this.myReactiveForm['controls'].gender.value;
    this.firebasePost.skills = this.myReactiveForm['controls'].skills.value;

    // console.log('firebase class', this.firebasePost);
    
   this._firebaseService.createPostDataReactive(this.firebasePost).subscribe(res => {
    console.log('firebase with reactive form', res);
    
   })
  }
  OnAddSkills(){
   (<FormArray>this.myReactiveForm.get('skills')).push(new FormControl(null,Validators.required));
  }
  removeFormControl(index: number ): void{
    (<FormArray>this.myReactiveForm.get('skills')).removeAt(index);
  }
  
  NaNames(control:FormControl){
   if (this.notAllowedNames.indexOf(control.value) !== -1) {
    return {'notAllowedNames': true}
   }
   return null;
  }
  NaEmails(control: FormControl) : Promise<any> | Observable<any> {
    const myResponse = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'codemindTechnology@gmail.com') {
          resolve({'emailNotAllowed': true})
        }else {
          resolve (null);
        }
      }, 4000);
    })
    return myResponse;
  }
 
}

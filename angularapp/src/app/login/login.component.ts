import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _route: Router, private _authService: AuthService) { }

  ngOnInit() {
  }

  checkUser(uname, password) {

    //   if(uname == 'admin' &&  password == 'admin')
    //   {
    //     this._route.navigate(['product/laptop'])
    //   }

    var output = this._authService.checkUserNameAndPassword(uname, password);

    if (output == true) {
      window.alert('Login Successful');
    }else {
      window.alert('invalid userName and password');
    }
  }

}

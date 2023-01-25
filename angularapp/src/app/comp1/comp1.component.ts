import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  userName;
  constructor(private _utilityService: UtilityService) {
    this._utilityService.userName.subscribe(res => {
      this.userName = res;
    })
   }

  ngOnInit() {
  }
  updateUserName(uname){
    console.log(uname.value);

    let emp = {
      Id : 101,
      name: 'Nisha'
    }
    this._utilityService.userName.next(JSON.stringify(emp));

    //next method is used to send the message to the observable : i.e username
    this._utilityService.userName.next(uname.value);
  }
}

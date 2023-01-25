import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-pipesdemo',
  templateUrl: './pipesdemo.component.html',
  styleUrls: ['./pipesdemo.component.css']
})
export class PipesdemoComponent implements OnInit {
 
  price : number = 80000
  obser; //inbuiltPipe
  todaysDate = new Date();
 obj = {id: '101', name: 'Nisha'}
  constructor(private _utilityService: UtilityService) { 
    this.obser = this._utilityService.userName;
  }

  ngOnInit() {
  }

}

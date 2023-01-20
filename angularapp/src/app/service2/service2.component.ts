import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-service2',
  templateUrl: './service2.component.html',
  styleUrls: ['./service2.component.css']
})
export class Service2Component implements OnInit {

  productss = {};
  constructor(private _demoService: DemoService) { }

  ngOnInit() {
    this.productss = this._demoService.products;
  }

  OnSubscribe(){
    this._demoService.display();
  }
}

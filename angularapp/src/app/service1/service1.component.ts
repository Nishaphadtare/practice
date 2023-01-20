import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-service1',
  templateUrl: './service1.component.html',
  styleUrls: ['./service1.component.css']
})
export class Service1Component implements OnInit {

  productss = {};
  constructor(private _demoService: DemoService) { }

  ngOnInit() {
    this.productss = this._demoService.products;
  }
  OnSubscribe(){
    this._demoService.display();
  }
}

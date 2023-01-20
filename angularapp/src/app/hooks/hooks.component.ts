import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval } from 'rxjs';
import { Products } from '../models/product';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

@Input() userid: number;
@Input() parentData: string;
@Input() product : Products;
@ContentChild("child", {static: false}) contentChild: ElementRef;
  pi;
counter;
num: number = 1;
  constructor() {
    this.pi = 3.14;
    console.log('HooksComponent Constructor called');
   }
  ngOnDestroy(): void {
    console.log('HooksComponent ngOnDestroy called');
    clearInterval(this.counter)
  }
  ngAfterViewChecked(): void {
    console.log('HooksComponent ngAfterViewChecked called');
  }
  ngAfterViewInit(): void {
   console.log('HooksComponent ngAfterViewInit called');
   
  }
  ngAfterContentChecked(): void {
    console.log('HooksComponent ngAfterContentChecked called');
  }
  ngAfterContentInit(): void {
    console.log('HooksComponent ngAfterContentInit', this.contentChild);
    this.contentChild.nativeElement.setAttribute('style','color: green');
  }
  ngDoCheck(): void {
    console.log('HooksComponent ngDoCheck called', this.contentChild);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('HooksComponent ngOnChanges called');
    console.log(this.parentData);
    

    for (const propname in changes) {
      const prop = changes[propname];
      const {previousValue, currentValue, firstChange} = prop;
        
      console.log(`prop name ${propname}`);
      console.log(`previous value ${previousValue}`);
      console.log(`current value ${currentValue}`);
      console.log(`first change ${firstChange}`);
      console.log(`-------------------------`);
      
      }
    }
  
  ngOnInit() {
    console.log("HooksComponent ngOnInit called");
    this.counter = setInterval(() => {
      this.num = this.num + 1;
      console.log(this.num);
      
    }, 1000)
  }
  }




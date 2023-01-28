import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustdirDirective } from '../custdir.directive';



@NgModule({
  declarations: [ 
    CustdirDirective  //shared module
  
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustdirDirective
  ]
})
export class UtilityModule { }

import { asNativeElements, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCusdirassin]'
})
export class CusdirassinDirective {

  constructor(private el: ElementRef, private render: Renderer2 ) {
    console.log(`Custom Directives applied`);
  
    render.setStyle(el.nativeElement,`backgroundColor`, `yellow` );
    
   }

 
}

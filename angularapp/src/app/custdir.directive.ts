import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustdir]'
})
export class CustdirDirective {

  constructor(private el: ElementRef, private render: Renderer2) { 
    console.log('Custom directives applied');

        // el.nativeElement.style.backgroundColor = 'gray';
    // el.nativeElement.style.display = 'none';

    render.setStyle(el.nativeElement, 'backgroundColor', 'yellow')
  }

}

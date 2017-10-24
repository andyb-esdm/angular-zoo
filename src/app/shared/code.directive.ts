import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCode]'
})
export class CodeDirective {

  get code() {
    return this.elementRef.nativeElement.textContent.trim();
  }
  constructor(private elementRef: ElementRef) { }

}

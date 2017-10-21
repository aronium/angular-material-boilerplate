import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[ngInit]',
  exportAs: 'ngInit'
})
export class NgInitDirective {

  @Input() value: any = {};
  
  @Input() ngInit;
  ngOnInit() {
    if(this.ngInit) { 
      this.ngInit(); 
    }
  }  
}
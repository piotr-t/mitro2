import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {



  @Input()classScroll1: string;
  @Input()classScroll2: string;
  @HostBinding('class') role;
  @HostListener('window:scroll', ['$event']) onScroll(ev): void {
    this.role = ( ev.target.scrollingElement.scrollTop > 300) ? this.classScroll1 : this.classScroll2;
  }
  @HostListener('document:load', ['$event']) onLoadd(): void{
   this.role = this.classScroll2;
  }

  constructor(private el: ElementRef) {
    setTimeout(() => {this.role = this.classScroll2; }, 100);
    //
   }
}

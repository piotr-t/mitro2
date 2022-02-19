import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild, ElementRef, HostBinding, OnChanges, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('HeaderSize', [
      state('Big', style({ height: '22vw'})),
      state('Small', style({ height: 22 / 2 + 'vw'})),
      transition('Big <=> Small', [animate('3s')]),
      transition('* => Big', [animate('3s')])
    ])
  ]
})
export class HeaderComponent implements OnInit, OnChanges {
  bigHeader;

@HostListener('window:pageshow') onLoadd(): void{
  this.bigHeader = 'Big';
}


  @HostListener('window:scroll', ['$event']) onScroll(ev): void {
    this.bigHeader = ( ev.target.scrollingElement.scrollTop > 300) ? 'Small' : 'Big';
  }

  constructor() { }



  ngOnInit() {
    this.bigHeader = 'Big';
  }


  ngOnChanges() {


  }

}

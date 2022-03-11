import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild, ElementRef, HostBinding, OnChanges, Input, HostListener, AfterViewChecked } from '@angular/core';

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
export class HeaderComponent implements OnInit{



f = 10;

  constructor() { }



  ngOnInit(): void {
  }

  onLoad(e): void{
    this.f = e.target.height;
    console.log('e', e.target.height);

  }



}

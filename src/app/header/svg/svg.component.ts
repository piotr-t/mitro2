import { Component, OnInit, ViewChild, Input, OnChanges, DoCheck, HostBinding, ElementRef } from '@angular/core';

// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.svg',
  styleUrls: ['./svg.component.scss']
})
export class SvgComponent implements OnInit, OnChanges, DoCheck {



    // dobre, można przypisać do komponentu różne atrybuty http://www.angular.love/2018/01/31/angular-dekorator-hostbinding/

  constructor() { }

  ngDoCheck() {
  }
  ngOnInit() {


  }
  ngOnChanges() {

  }



}

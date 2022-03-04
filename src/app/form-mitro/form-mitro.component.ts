import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-mitro',
  templateUrl: './form-mitro.component.html',
  styleUrls: ['./form-mitro.component.scss']
})
export class FormMitroComponent implements OnInit, AfterViewInit {

@ViewChild('inpp')inp1: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
console.log('inp1', this.inp1);

  }

  view(e): void{
    console.log('inprr', e);
  }

}

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
    const file: File = e[0];
    const formData = new FormData();
    formData.append('thumbnail', file);
    console.log('inprr', formData);
  }

}

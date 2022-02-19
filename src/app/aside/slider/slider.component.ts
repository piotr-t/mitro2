import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  caruselItems = [
    {src: '1.png', alt: '1'},
    {src: '2.png', alt: '2'},
    {src: '3.png', alt: '3'},
    {src: '6.jpg', alt: '4'},
    {src: '4.png', alt: '5'},
    {src: '7.jpg', alt: '6'}];

  constructor() { }

  ngOnInit() {


  }

}

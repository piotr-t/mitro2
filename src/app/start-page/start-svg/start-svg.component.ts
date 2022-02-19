import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-start-svg',
  templateUrl: './rysunek-7.svg',
  styleUrls: ['./start-svg.component.scss']
})
export class StartSvgComponent implements OnInit {

  Height;
  Width;
  viewbox;

  @ViewChild('SVG')svgRef: ElementRef;


@HostListener('window: load', ['$event'])load(e): void{
  this.Width = window.innerWidth;
  this.Height = window.innerHeight;
  this.svgRef.nativeElement.style.transform = 'scaleY(3)';
  this.svgRef.nativeElement.style.transform = 'scaleX(3)';
}

  constructor() { }

  ngOnInit(): void {

  }

}

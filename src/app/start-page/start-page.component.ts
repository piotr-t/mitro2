import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit, AfterViewInit {

  evEmiter = new EventEmitter<number>();

  @ViewChild('container')containerr: ElementRef;

  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void{
    ///console.log(this.containerr.nativeElement.clientHeight);
   // this.evEmiter.emit(this.containerr.nativeElement.clientHeight);

  }

}

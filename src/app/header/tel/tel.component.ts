import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tel',
  templateUrl: './tel.component.html',
  styleUrls: ['./tel.component.scss']
})
export class TelComponent implements OnInit {


  @Input()
smalHeader;

  constructor() { }

  ngOnInit() {
  }

}

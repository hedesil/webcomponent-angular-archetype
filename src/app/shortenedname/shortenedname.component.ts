import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  templateUrl: './<shortenedName>.component.html',
  styleUrls: ['./<shortenedName>.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})

export class <shortenedNameComp> implements OnInit {
@Input() public name: string;

  constructor() {
  }

  ngOnInit() {

  }

}

import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-<shortenedName>',
  templateUrl: './<shortenedName>.component.html',
  styleUrls: ['./<shortenedName>.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})

export class <shortenedNameUpper> implements OnInit {
  @Input() public name: string;

  constructor() {
  }

  ngOnInit() {

  }

}

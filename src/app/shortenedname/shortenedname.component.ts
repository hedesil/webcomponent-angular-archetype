import {Component, Input, OnInit} from '@angular/core';

@Component({
  // selector: 'app-shortenedname',
  templateUrl: './shortenedname.component.html',
  styleUrls: ['./shortenedname.component.css']
})
export class ShortenednameComponent implements OnInit {
  @Input() public name: string;

  constructor() {
  }

  ngOnInit() {
  }

}

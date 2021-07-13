import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ga-child03',
  templateUrl: './child03.component.html',
  styleUrls: ['./child03.component.scss']
})
export class Child03Component implements OnInit {

  child03_content = 'child conten 03';
  valu : string;
  constructor() { }

  ngOnInit(): void {
  }


}

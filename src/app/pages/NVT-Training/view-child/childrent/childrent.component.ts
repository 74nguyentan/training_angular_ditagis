import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ga-childrent',
  templateUrl: './childrent.component.html',
  styleUrls: ['./childrent.component.scss']
})
export class ChildrentComponent implements OnInit {

  child_content = 'child conten view child';
  valu : string;
  constructor() { }

  ngOnInit(): void {
  }

}

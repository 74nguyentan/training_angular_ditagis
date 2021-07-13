import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ga-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  valueInput = "Nhap Input !";
  valuOuput:string;
  constructor() { }

  ngOnInit(): void {
  }
  valueOuput(event) {
    this.valuOuput = event;
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ga-cell-tien-do',
  templateUrl: './cell-tien-do.component.html',
  styleUrls: ['./cell-tien-do.component.scss']
})
export class CellTienDoComponent implements OnInit {

  @Input() maTienDo: string;
  constructor() {}

  ngOnInit() {}
  getTienDoClass(maTienDo: string) {
    return `m${maTienDo}`;
  }

}

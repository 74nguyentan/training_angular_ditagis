import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ga-cell-tien-do-tdxd',
  templateUrl: './cell-tien-do-tdxd.component.html',
  styleUrls: ['./cell-tien-do-tdxd.component.scss'],
})
export class CellTienDoTdxdComponent implements OnInit {
  @Input() maTienDo: string;

  constructor() {}

  ngOnInit() {}
  getTienDoTDXDClass(maTienDo: string) {
    return `m${maTienDo}`;
  }
}

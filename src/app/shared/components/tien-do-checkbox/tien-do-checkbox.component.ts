import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ga-tien-do-checkbox',
  templateUrl: './tien-do-checkbox.component.html',
  styleUrls: ['./tien-do-checkbox.component.scss']
})
export class TienDoCheckboxComponent implements OnInit {
  @Input() tenTienDo: string;
  @Input() maTienDo: string;
  @Input() badge: string | null = null;
  @Output() checkedChange = new EventEmitter<boolean>();
  @Input() checked: boolean;
  constructor() {}

  ngOnInit() {}

  getTienDoClass(maTienDo: string) {
    return `m${maTienDo}`;
  }

}

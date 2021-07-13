import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DoAnService } from '@shared/services/do-an/do-an.service';

@Component({
  selector: 'ga-select-do-an',
  templateUrl: './select-do-an.component.html',
  styleUrls: ['./select-do-an.component.scss'],
})
export class SelectDoAnComponent implements OnInit {
  @Input()
  fullWidth = false;
  @Input() isAdd = false;
  @Input() allValue = false;
  /**
   * @returns maDoAn
   */
  @Output() valueChange = new EventEmitter<string>();
  @Input() value: string;
  @Input() disabled = false;
  @Input() placeholder = 'Tên dự án (*)';
  constructor(public service: DoAnService) {}

  ngOnInit(): void {}
}

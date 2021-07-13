import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DiaChiEntity } from '@shared/interfaces/dia-chi.interface';

@Component({
  selector: 'ga-input-dia-chi',
  templateUrl: './input-dia-chi.component.html',
  styleUrls: ['./input-dia-chi.component.scss'],
})
export class InputDiaChiComponent implements OnInit {
  @Input() title: string;
  @Input() value: Partial<DiaChiEntity>;
  @Output() valueChange = new EventEmitter<Partial<DiaChiEntity>>();
  @Input() inputTinhTP = false;
  constructor() {}

  ngOnInit() {}
}

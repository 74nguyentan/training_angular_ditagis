import { Component, Input, OnInit } from '@angular/core';
import { DiaChiEntity } from '@shared/interfaces/dia-chi.interface';
import { DiaChiService } from '@shared/services/dia-chi.service';

@Component({
  selector: 'ga-table-cell-dia-chi',
  templateUrl: './table-cell-dia-chi.component.html',
  styleUrls: ['./table-cell-dia-chi.component.scss'],
})
export class TableCellDiaChiComponent implements OnInit {
  text: string;

  private _value: DiaChiEntity;
  public get value(): DiaChiEntity {
    return this._value;
  }
  @Input() public set value(v: DiaChiEntity) {
    this._value = v;
    this.text = this.service.toString(v);
  }

  constructor(private service: DiaChiService) {}

  ngOnInit() {}
}

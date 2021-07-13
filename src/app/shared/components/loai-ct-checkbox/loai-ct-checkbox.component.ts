import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ga-loai-ct-checkbox',
  templateUrl: './loai-ct-checkbox.component.html',
  styleUrls: ['./loai-ct-checkbox.component.css']
})
export class LoaiCtCheckboxComponent implements OnInit {

  @Input() maLoai: string;
  @Input() tenLoai: string;
  @Input() badge: string | null = null;
  @Output() checkedChange = new EventEmitter<boolean>();
  @Input() checked: boolean;

  constructor() { }
  ngOnInit() {}

  getLoaiClass(maLoai: string) {
    return `m${maLoai}`;
  }
}

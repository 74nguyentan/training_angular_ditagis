import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ga-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent implements OnInit {
@Input() childInput ='';
@Output() Ouput = new EventEmitter<string>();

value='Nhap Ouput !';
  constructor() { }

  ngOnInit(): void {
  }

  sendOuput(){
    this.Ouput.emit(this.value);
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DemoServiceService } from '../share/demo-service.service';

@Component({
  selector: 'ga-children-demo',
  templateUrl: './children-demo.component.html',
  styleUrls: ['./children-demo.component.scss']
})
export class ChildrenDemoComponent implements OnInit {
  @Input() name = 'abc';
  @Output() messageEvent = new EventEmitter<string>();
  message: string = 'children send ouput!';
  _text: string;
  constructor(private service: DemoServiceService) { }

  sendMessage() {
    this.messageEvent.emit(this.message);
  }

  ngOnInit(): void {
  }

  Setsubject() {
    this.service.setText(this._text);
  }

}

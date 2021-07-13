import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DemoServiceService } from '../share/demo-service.service';

@Component({
  selector: 'ga-child02',
  templateUrl: './child02.component.html',
  styleUrls: ['./child02.component.scss']
})
export class Child02Component implements OnInit {

  @Output() eventChange = new EventEmitter<string>();
  constructor(private service: DemoServiceService) {

  }
  name: string;
  _textSubject: string;
  ngOnInit(): void {
    this.service.text$.subscribe(data => {
      this._textSubject = data;
    }
    
    )
  }

}

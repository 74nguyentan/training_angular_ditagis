import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../share/service.service';

@Component({
  selector: 'ga-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {

  _textSubject: string;
  textValue:string;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.text$.subscribe(data => {
      this._textSubject = data;
    });
  }

  setText(){
    this.service.setText(this.textValue);
  }

}

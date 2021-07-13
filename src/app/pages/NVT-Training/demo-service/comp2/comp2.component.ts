import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../share/service.service';

@Component({
  selector: 'ga-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {

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

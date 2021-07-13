import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  private _textSubject: BehaviorSubject<string> = new BehaviorSubject<string>('loadding ...!');

  text$: Observable<string> = this._textSubject.asObservable();

  setText(text: string) {
    this._textSubject.next(text);
  }

}

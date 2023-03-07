import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TestService {

  private _counterSubj = new BehaviorSubject<number>(0);
  counter$ = this._counterSubj.asObservable();
  get counter() {
    return this._counterSubj.value;
  }

  constructor() {   
    console.log('init test service')
  }

  incrementCounter() {
    this._counterSubj.next(this._counterSubj.value + 1)
  }
}

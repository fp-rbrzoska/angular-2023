import { Injectable } from '@angular/core';

@Injectable()
export class TestService {
  private _testCounter = 0;

  get counter() {
    return this._testCounter;
  }

  constructor() {   
    console.log('init test service')
  }

  incrementCounter() {
    this._testCounter++;
  }
}

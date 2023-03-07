import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class TestService {

  private _testDataSubj = new BehaviorSubject<null | { testData: number}>(null);
  private _counterSubj = new BehaviorSubject<number>(0);
  counter$ = this._counterSubj.asObservable();
  testData$ = this._testDataSubj.asObservable();
  get counter() {
    return this._counterSubj.value;
  }

  constructor(private _http: HttpClient) {   
    console.log('init test service')
  }

  incrementCounter() {
    this._counterSubj.next(this._counterSubj.value + 1)
  }

  getTestData(): Observable<{ testData: number}> {
    return this._http.get<{ testData: number}>('http://localhost:3000/test')
  }
  
  fetchTestData(): void {
    this._http.get<{ testData: number}>('http://localhost:3000/test').subscribe( v => {
  this._testDataSubj.next(v)})
  }
}

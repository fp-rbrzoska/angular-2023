import { Component, OnDestroy } from '@angular/core';
import { User } from '../models/User';
import { TestService } from './test.service';
import { Observable, Subscription, share, shareReplay } from 'rxjs';

@Component({
  selector: 'fp-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnDestroy {

  private _subscription = new Subscription();
  counter$: Observable<number>;
  showBox = false;
  today = new Date();
  myTestString = 'Hello!';
  users: User[] = [
    { name: 'Alojzy', age: 72 },
    { name: 'Jarosław', age: 75 }
  ];

  constructor(private _testService: TestService) {   
    this.counter$ = _testService.counter$.pipe(share());

    this._subscription = this.counter$.subscribe(v => console.log('counter: ' + v))
  }

  handleChangeChildData(str: string) {
  console.log('polecial event', str)
  }

  handleClickToggleBoxBtn() {
    this._testService.incrementCounter()
    this.showBox =!this.showBox;
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}

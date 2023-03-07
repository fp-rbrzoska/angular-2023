import { Component } from '@angular/core';
import { User } from '../models/User';
import { TestService } from './test.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'fp-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  counter$: Observable<number>;
  showBox = false;
  today = new Date();
  myTestString = 'Hello!';
  users: User[] = [
    { name: 'Alojzy', age: 72 },
    { name: 'Jarosław', age: 75 }
  ];

  constructor(private _testService: TestService) {   
    this.counter$ = _testService.counter$;

    this.counter$.subscribe(v => console.log('counter: ' + v))
  }

  handleChangeChildData(str: string) {
  console.log('polecial event', str)
  }

  handleClickToggleBoxBtn() {
    this._testService.incrementCounter()
    this.showBox =!this.showBox;
  }
}

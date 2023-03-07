import { Component } from '@angular/core';
import { User } from '../models/User';
import { TestService } from './test.service';

@Component({
  selector: 'fp-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  showBox = false;
  today = new Date();
  myTestString = 'Hello!';
  users: User[] = [
    { name: 'Alojzy', age: 72 },
    { name: 'Jarosław', age: 75 }
  ];

  constructor(private _testService: TestService) {    
    _testService.incrementCounter();   
    _testService.incrementCounter();   
    _testService.incrementCounter();
    console.log(_testService.counter)
  }

  handleChangeChildData(str: string) {
  console.log('polecial event', str)
  }

  handleClickToggleBoxBtn() {
    this.showBox =!this.showBox;
  }
}

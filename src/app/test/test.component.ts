import { Component } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'fp-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {

  showBox = false;
  today = new Date();
  myTestString = 'Hello!';
  users: User[] = [
    { name: 'Alojzy', age: 72 },
    { name: 'Jarosław', age: 75 }
  ]

  handleChangeChildData(str: string) {
  console.log('polecial event', str)
  }

  handleClickToggleBoxBtn() {
    this.showBox =!this.showBox;
  }
}

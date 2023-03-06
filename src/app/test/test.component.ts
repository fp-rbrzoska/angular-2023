import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'fp-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {

  today = new Date();
  myTestString = 'Hello!'

  handleChangeChildData(str: string) {
  console.log('polecial event', str)
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'fp-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.scss']
})
export class TestChildComponent {

  @Input() childData!: string;
  @Output() changeChildData = new EventEmitter<string>();

  transformStringToUppercase(str: string): string {
    return str.toUpperCase()
  }

  handleButtonClick(e: MouseEvent){
    console.log(e)
   this.changeChildData.emit(this.childData.toLowerCase())
  }
}

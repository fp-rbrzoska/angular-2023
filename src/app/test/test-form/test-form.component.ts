import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'fp-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent implements OnInit {

  myForm = new FormGroup({
    testData: new FormControl(null, {
      validators: [ Validators.required, Validators.minLength(2)]
    })
  })

  ngOnInit(): void {
    this.myForm.valueChanges.subscribe(v => console.log(v))
    this.myForm.statusChanges.subscribe(v => console.log(v))
    this.myForm.get('testData')?.valueChanges.subscribe(v => console.log(v))
    this.myForm.get('testData')?.statusChanges.subscribe(v => console.log(v))
  }

  submit() {
    if(this.myForm.valid) {
      console.log(this.myForm.value)
    } else {
      console.error('form invalid')
    }
    
  }
}

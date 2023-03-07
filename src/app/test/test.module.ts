import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { TestChildComponent } from './test-child/test-child.component';
import { TestService } from './test.service';
import { RxTestComponent } from './rx-test/rx-test.component';
import { TestFormComponent } from './test-form/test-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  TestComponent, TestChildComponent, RxTestComponent, TestFormComponent
],
  imports: [
    CommonModule,
    TestRoutingModule,
    ReactiveFormsModule
  ],
  providers: [TestService]
})
export default class TestModule { }

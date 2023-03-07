import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { TestChildComponent } from './test-child/test-child.component';
import { TestService } from './test.service';
import { RxTestComponent } from './rx-test/rx-test.component';


@NgModule({
  declarations: [
  TestComponent, TestChildComponent, RxTestComponent
],
  imports: [
    CommonModule,
    TestRoutingModule
  ],
  providers: [TestService]
})
export default class TestModule { }

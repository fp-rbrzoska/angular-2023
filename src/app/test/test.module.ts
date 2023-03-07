import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { TestChildComponent } from './test-child/test-child.component';


@NgModule({
  declarations: [
  TestComponent, TestChildComponent
],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export default class TestModule { }
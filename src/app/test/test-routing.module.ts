import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test.component';
import { RxTestComponent } from './rx-test/rx-test.component';

const routes: Routes = [
  { path: '', component: TestComponent },
  { path: 'rx', component: RxTestComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }

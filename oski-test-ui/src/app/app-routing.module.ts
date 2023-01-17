import { ViewTestComponent } from './tests/view-test/view-test.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestsComponent } from './tests/tests.component';
import { TestComponent } from './test/test.component';
import { TestFinishedComponent } from './test-finished/test-finished.component';

const routes: Routes = [
  {path:'', component: TestsComponent},
  {path:'tests', component: TestsComponent},
  {path:'tests/:id', component: TestComponent},
  {path:'tests/overview/:id', component: ViewTestComponent},
  {path:'tests/finished/:id', component: TestFinishedComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

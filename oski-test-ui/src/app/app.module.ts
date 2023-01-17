import { MaterialModule } from './material/material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { TestsComponent } from './tests/tests.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewTestComponent } from './tests/view-test/view-test.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { AnswersComponent } from './answers/answers.component';
import { QuestionComponent } from './question/question.component';
import { TestComponentButtonsComponent } from './layout/test-component-buttons/test-component-buttons.component';
import { TestFinishedComponent } from './test-finished/test-finished.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TestsComponent,
    ViewTestComponent,
    TestComponent,
    AnswersComponent,
    QuestionComponent,
    TestComponentButtonsComponent,
    TestFinishedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

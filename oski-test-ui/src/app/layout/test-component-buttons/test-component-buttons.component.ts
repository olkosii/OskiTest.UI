import { Component, OnInit, Output, Input, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { QuestionDto } from 'src/app/models/ui-models/questionDto.model';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'test-component-buttons',
  templateUrl: './test-component-buttons.component.html',
  styleUrls: ['./test-component-buttons.component.css']
})
export class TestComponentButtonsComponent implements OnInit, OnDestroy {
  @Input('testId') testId!: string | null;
  @Output() questionIdEvent = new EventEmitter<number>();
  questionId: number = 1;
  
  questions: QuestionDto[] = [];
  subscribtion!: Subscription;
  
  constructor(private testService: TestService) { }

  ngOnInit(): void {
    if(this.testId){
        this.subscribtion = this.testService.getQuestions(+this.testId).subscribe(response => {
          this.questions = response;
      })
    } 
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }

  increaseQuestionId(){
    if((this.questions.length) > this.questionId){
      this.questionIdEvent.emit(++this.questionId);
    }
  }

  decreaseQuestionId(){
    if(this.questionId > 0){
      this.questionIdEvent.emit(--this.questionId);
    }
  }

}

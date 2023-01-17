import { AnswerDto } from './../models/ui-models/answerDto.model';
import { TestService } from './../services/test.service';
import { Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnChanges,OnDestroy {

  @Input('questionId') questionId!: number;
  answers:AnswerDto[] = [];
  subscribtion!: Subscription;

  constructor(private testService: TestService) { }

  ngOnChanges(): void {
    this.subscribtion = this.testService.getAnswers(this.questionId).subscribe(response => {
      this.answers = response;
    })
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }

  inputChecked(answerId: string){
    localStorage.setItem('checkedAnswerForQuestion:' + this.questionId, answerId)
  }

  checked(answerId: string){
    var localStorageItem = localStorage.getItem('checkedAnswerForQuestion:' + this.questionId);
    if(localStorageItem === answerId)
      return true;

    return false;
  }



}

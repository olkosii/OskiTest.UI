import { Subscription } from 'rxjs';
import { TestService } from './../services/test.service';
import { QuestionDto } from './../models/ui-models/questionDto.model';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnChanges {
  
  @Input("questionId") questionId!: number;
  question: QuestionDto = {
    id: 0,
    text: '',
    testId: 0
  };
  subscription!: Subscription;

  constructor(private testService: TestService) { }

  ngOnChanges(): void {
    this.subscription = this.testService.getQuestion(this.questionId).subscribe(response => {
      this.question = response;
    })
  }

}

import { Answer } from './../models/api-models/answer.model';
import { Question } from './../models/api-models/question.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Test } from '../models/api-models/test.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private baseApiUrl = 'https://localhost:44386/';

  constructor(private httpClient: HttpClient) { }

  getTests(){
    return this.httpClient.get<Test[]>(this.baseApiUrl + 'Tests');
  }

  getTest(testId: number){
    return this.httpClient.get<Test>(this.baseApiUrl + 'Tests/' + testId);
  }

  getQuestions(testId: number){
    return this.httpClient.get<Question[]>(this.baseApiUrl + 'Tests/GetQuestions/' + testId);
  }

  getQuestion(questionId: number){
    return this.httpClient.get<Question>(this.baseApiUrl + 'Tests/GetQuestion/' + questionId);
  }

  getAnswers(questionId: number){
    return this.httpClient.get<Answer[]>(this.baseApiUrl + 'Tests/GetAnswers/' + questionId);
  }

  getAnswer(answerId: number){
    return this.httpClient.get<Answer>(this.baseApiUrl + 'Tests/GetAnswer/' + answerId);
  }
}

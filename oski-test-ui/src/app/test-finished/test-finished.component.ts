import { TestDto } from './../models/ui-models/testDto.model';
import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'test-finished',
  templateUrl: './test-finished.component.html',
  styleUrls: ['./test-finished.component.css']
})
export class TestFinishedComponent implements OnInit {
  test!:TestDto;
  testId!: string | null;
  result: number = 0;

  constructor(private testService: TestService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>
      this.testId = params.get('id'))

    if(this.testId)
      this.testService.getTest(+this.testId).subscribe(response => this.test = response);

      for (var key in localStorage){
        let answerId = localStorage.getItem(key);

        if(answerId){
          this.testService.getAnswer(+answerId).subscribe(response => {
            if(response.isTrue)
              this.result++;
          })
        }
     }

     
  }

  cleanStorage(){
    localStorage.clear();
  }

}

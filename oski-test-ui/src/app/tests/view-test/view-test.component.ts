import { TestDto } from './../../models/ui-models/testDto.model';
import { TestService } from './../../services/test.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'view-test',
  templateUrl: './view-test.component.html',
  styleUrls: ['./view-test.component.css']
})
export class ViewTestComponent implements OnInit {
  testId!: string | null;
  checked = false;
  test: TestDto = {
    id: 0,
    name: '',
    overview: '',
    imageUrl: ''
  };

  constructor(private testService: TestService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.testId = params.get('id')
    
      if(this.testId)
        this.testService.getTest(+this.testId).subscribe(response => {
          this.test = response;
        });
    
    })
  }
}

import { TestDto } from './../models/ui-models/testDto.model';
import { TestService } from './../services/test.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  tests: TestDto[] = [];

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.testService.getTests().subscribe(response => this.tests = response);
  }

}

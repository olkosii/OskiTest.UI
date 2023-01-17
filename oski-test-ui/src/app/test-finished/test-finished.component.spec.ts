import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFinishedComponent } from './test-finished.component';

describe('TestFinishedComponent', () => {
  let component: TestFinishedComponent;
  let fixture: ComponentFixture<TestFinishedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestFinishedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestFinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

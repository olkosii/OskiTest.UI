import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponentButtonsComponent } from './test-component-buttons.component';

describe('TestComponentButtonsComponent', () => {
  let component: TestComponentButtonsComponent;
  let fixture: ComponentFixture<TestComponentButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponentButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestComponentButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

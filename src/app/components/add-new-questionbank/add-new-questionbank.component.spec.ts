import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewQuestionbankComponent } from './add-new-questionbank.component';

describe('AddNewQuestionbankComponent', () => {
  let component: AddNewQuestionbankComponent;
  let fixture: ComponentFixture<AddNewQuestionbankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewQuestionbankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewQuestionbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

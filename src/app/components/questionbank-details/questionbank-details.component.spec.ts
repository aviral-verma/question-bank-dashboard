import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionbankDetailsComponent } from './questionbank-details.component';

describe('QuestionbankDetailsComponent', () => {
  let component: QuestionbankDetailsComponent;
  let fixture: ComponentFixture<QuestionbankDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionbankDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionbankDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

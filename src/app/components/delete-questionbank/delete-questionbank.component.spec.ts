import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteQuestionbankComponent } from './delete-questionbank.component';

describe('DeleteQuestionbankComponent', () => {
  let component: DeleteQuestionbankComponent;
  let fixture: ComponentFixture<DeleteQuestionbankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteQuestionbankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteQuestionbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

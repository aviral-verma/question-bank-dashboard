import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQuestionbankComponent } from './edit-questionbank.component';

describe('EditQuestionbankComponent', () => {
  let component: EditQuestionbankComponent;
  let fixture: ComponentFixture<EditQuestionbankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditQuestionbankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditQuestionbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

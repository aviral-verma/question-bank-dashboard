import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionpaperDetailsComponent } from './questionpaper-details.component';

describe('QuestionpaperDetailsComponent', () => {
  let component: QuestionpaperDetailsComponent;
  let fixture: ComponentFixture<QuestionpaperDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionpaperDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionpaperDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewQuestionpaperComponent } from './add-new-questionpaper.component';

describe('AddNewQuestionpaperComponent', () => {
  let component: AddNewQuestionpaperComponent;
  let fixture: ComponentFixture<AddNewQuestionpaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewQuestionpaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewQuestionpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

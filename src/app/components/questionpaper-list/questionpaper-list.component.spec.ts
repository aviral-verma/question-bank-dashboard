import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionpaperListComponent } from './questionpaper-list.component';

describe('QuestionpaperListComponent', () => {
  let component: QuestionpaperListComponent;
  let fixture: ComponentFixture<QuestionpaperListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionpaperListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionpaperListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

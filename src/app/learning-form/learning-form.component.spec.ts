import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningFormComponent } from './learning-form.component';

describe('LearningFormComponent', () => {
  let component: LearningFormComponent;
  let fixture: ComponentFixture<LearningFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LearningFormComponent]
    });
    fixture = TestBed.createComponent(LearningFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

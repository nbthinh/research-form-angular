import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maccaiquan2Component } from './maccaiquan2.component';

describe('Maccaiquan2Component', () => {
  let component: Maccaiquan2Component;
  let fixture: ComponentFixture<Maccaiquan2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Maccaiquan2Component]
    });
    fixture = TestBed.createComponent(Maccaiquan2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

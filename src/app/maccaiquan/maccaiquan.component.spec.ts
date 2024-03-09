import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaccaiquanComponent } from './maccaiquan.component';

describe('MaccaiquanComponent', () => {
  let component: MaccaiquanComponent;
  let fixture: ComponentFixture<MaccaiquanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaccaiquanComponent]
    });
    fixture = TestBed.createComponent(MaccaiquanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

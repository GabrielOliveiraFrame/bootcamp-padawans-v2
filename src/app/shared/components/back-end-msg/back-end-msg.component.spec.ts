import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEndMsgComponent } from './back-end-msg.component';

describe('BackEndMsgComponent', () => {
  let component: BackEndMsgComponent;
  let fixture: ComponentFixture<BackEndMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackEndMsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackEndMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

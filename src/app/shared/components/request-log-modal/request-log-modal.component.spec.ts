import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestLogModalComponent } from './request-log-modal.component';

describe('RequestLogModalComponent', () => {
  let component: RequestLogModalComponent;
  let fixture: ComponentFixture<RequestLogModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestLogModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestLogModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

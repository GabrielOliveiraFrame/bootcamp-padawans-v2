import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestLoginModalComponent } from './request-login-modal.component';

describe(RequestLoginModalComponent.name, () => {
  let component: RequestLoginModalComponent;
  let fixture: ComponentFixture<RequestLoginModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestLoginModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestLoginModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

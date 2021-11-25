import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectCreateEventComponent } from './redirect-create-event.component';

describe('RedirectCreateEventComponent', () => {
  let component: RedirectCreateEventComponent;
  let fixture: ComponentFixture<RedirectCreateEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedirectCreateEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectCreateEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

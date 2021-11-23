import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotLogComponent } from './not-log.component';

describe('NotLogComponent', () => {
  let component: NotLogComponent;
  let fixture: ComponentFixture<NotLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

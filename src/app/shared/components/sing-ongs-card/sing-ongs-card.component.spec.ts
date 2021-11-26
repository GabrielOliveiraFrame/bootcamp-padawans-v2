import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingOngsCardComponent } from './sing-ongs-card.component';

describe('SingOngsCardComponent', () => {
  let component: SingOngsCardComponent;
  let fixture: ComponentFixture<SingOngsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingOngsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingOngsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

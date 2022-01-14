import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMsgComponent } from './error-msg.component';

describe('ErrorMsgComponent', () => {
  let component: ErrorMsgComponent;
  let fixture: ComponentFixture<ErrorMsgComponent>;

  let control: Object;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorMsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('the errorMsg method', () => {
    it('should return "Email é obrigatório(a)."', () => {
      component.label = 'Email';

      control = {
        errors: {required: true},
        touched: true,
        dirty: true
      }

      component.control = control;
      expect(component.errorMessage).toEqual('Email é obrigatório(a).');
    });

    it('should return null', () => {
      component.label = 'Email';

      control = {
        errors: {required: true},
        touched: false,
        dirty: false
      }

      component.control = control;
      expect(component.errorMessage).toBeNull();
    })
  })


});

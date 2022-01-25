import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrService } from 'ngx-toastr';

import { BackEndMsgComponent } from './back-end-msg.component';

describe(BackEndMsgComponent.name, () => {
  let component: BackEndMsgComponent;
  let fixture: ComponentFixture<BackEndMsgComponent>;

  let toastrSpy: jasmine.SpyObj<ToastrService>;

  beforeEach(async () => {
    const toastrSpyObj = jasmine.createSpyObj('ToastrService', ['success']);

    await TestBed.configureTestingModule({
      declarations: [ BackEndMsgComponent ],
      providers: [
        { provide: ToastrService, useValue: toastrSpyObj },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackEndMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    toastrSpy = TestBed.inject(ToastrService) as jasmine.SpyObj<ToastrService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

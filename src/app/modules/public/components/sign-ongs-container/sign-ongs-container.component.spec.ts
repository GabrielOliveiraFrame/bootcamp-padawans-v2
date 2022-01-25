import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignOngsContainerComponent } from './sign-ongs-container.component';

describe(SignOngsContainerComponent.name, () => {
  let component: SignOngsContainerComponent;
  let fixture: ComponentFixture<SignOngsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignOngsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignOngsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

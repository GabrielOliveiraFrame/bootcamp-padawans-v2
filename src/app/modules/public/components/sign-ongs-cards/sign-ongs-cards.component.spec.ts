import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { OngsService } from 'src/app/shared/services/ongs.service';

import { SignOngsCardsComponent } from './sign-ongs-cards.component';

describe('SignOngsCardsComponent', () => {
  let component: SignOngsCardsComponent;
  let fixture: ComponentFixture<SignOngsCardsComponent>;

  let serviceSpy: jasmine.SpyObj<OngsService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('OngsService', ['getAll']);

    await TestBed.configureTestingModule({
      declarations: [ SignOngsCardsComponent ],
      providers: [
        { provide: OngsService, useValue: spy }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignOngsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    serviceSpy = TestBed.inject(OngsService) as jasmine.SpyObj<OngsService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('the getOngs method', () => {
    it('should ongsList receive all the ongs', () => {
      const expectedOngs = [
        {user: 'OngBrasil', cnpj: '12312312312312'},
        {user: 'AmigosBem', cnpj: '12312752312312'}
      ];

      serviceSpy.getAll.and.returnValue(of(expectedOngs));

      component.getOngs();
      component.ongsList.subscribe((data: any) => {
        expect(data).toEqual(expectedOngs);
      })
    })
  })
});

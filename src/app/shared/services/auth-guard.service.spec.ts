import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

import { AuthGuardService } from './auth-guard.service';

describe(AuthGuardService.name, () => {
  let service: AuthGuardService;

  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    const routerSpyObj = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        {provide: Router, useValue: routerSpyObj}
      ]
    });
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardService);

    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should navigate never called', () => {
    localStorage.setItem('userName', 'Ong');
    service.canActivate(new ActivatedRouteSnapshot(), <RouterStateSnapshot>{url: 'testUrl'});
    expect(routerSpy.navigate).toHaveBeenCalledTimes(0);
  });

  it('should navigate have been called', () => {
    localStorage.removeItem('userName');
    service.canActivate(new ActivatedRouteSnapshot(), <RouterStateSnapshot>{url: 'testUrl'});
    expect(routerSpy.navigate).toHaveBeenCalledWith(['public/dashboard']);
  });
});

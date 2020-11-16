import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Subscription } from 'rxjs';
import { API_URL } from '../app.config';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let httpTestingController: HttpTestingController;
  let subscription: Subscription;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [
        { provide: API_URL, useValue: 'apiUrl' }
      ]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    subscription = undefined;
  });

  afterEach(() => {
    if (subscription) {
      subscription.unsubscribe();
    }
  });

  it('should create the service', () => {
    const service = TestBed.inject(AuthService);
    expect(service).toBeTruthy();
  });

  it('should be unauthenticated as the beginning', () => {
    const service = TestBed.inject(AuthService);
    expect(service.isAuthenticated).toBeFalse();
    expect(service.error).toBeFalse();
  });

  it('should be authenticated after successful register', fakeAsync(() => {
    const service = TestBed.inject(AuthService);
    subscription = service.register('test', 'test').subscribe();

    const req = httpTestingController.expectOne('apiUrl/register');
    expect(req.request.method).toEqual('POST');
    req.flush({ username: 'test' });
    expect(service.isAuthenticated).toBeTrue();
    expect(service.user).toBe('test');
    expect(service.error).toBeFalse();

    httpTestingController.verify();
    subscription.unsubscribe();
  }));

  it('should be unauthenticated after failed register', fakeAsync(() => {
    const service = TestBed.inject(AuthService);
    subscription = service.register('test', 'test').subscribe(_ => { }, _ => { });

    const req = httpTestingController.expectOne('apiUrl/register');
    expect(req.request.method).toEqual('POST');
    req.flush({ message: 'error' }, { status: 500, statusText: 'error' });
    expect(service.isAuthenticated).toBeFalse();
    expect(service.user).toBeFalsy();
    expect(service.error).toBeTrue();
    expect(service.errorMessage).toBe('error');

    httpTestingController.verify();
    subscription.unsubscribe();
  }));

  it('should be authenticated after successful login', fakeAsync(() => {
    const service = TestBed.inject(AuthService);
    subscription = service.login('test', 'test').subscribe();

    const req = httpTestingController.expectOne('apiUrl/login');
    expect(req.request.method).toEqual('POST');
    req.flush({ username: 'test' });
    expect(service.isAuthenticated).toBeTrue();
    expect(service.user).toBe('test');
    expect(service.error).toBeFalse();

    httpTestingController.verify();
    subscription.unsubscribe();
  }));

  it('should be unauthenticated after failed login', fakeAsync(() => {
    const service = TestBed.inject(AuthService);
    subscription = service.login('test', 'test').subscribe(_ => { }, _ => { });

    const req = httpTestingController.expectOne('apiUrl/login');
    expect(req.request.method).toEqual('POST');
    req.flush({ message: 'error' }, { status: 500, statusText: 'error' });
    expect(service.isAuthenticated).toBeFalse();
    expect(service.user).toBeFalsy();
    expect(service.error).toBeTrue();
    expect(service.errorMessage).toBe('error');

    httpTestingController.verify();
    subscription.unsubscribe();
  }));

  it('should redirect to /recipes after logout', () => {
    const service = TestBed.inject(AuthService);
    const navigateSpy = spyOn(TestBed.inject(Router), 'navigate');
    service.logout();
    expect(navigateSpy).toHaveBeenCalledWith(['/recipes']);
  });
});

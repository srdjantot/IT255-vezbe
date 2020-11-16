import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Subscription } from 'rxjs';
import { AdviceService } from './advice.service';

describe('AdviceService', () => {
  let httpTestingController: HttpTestingController;
  let subscription: Subscription;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
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
    const service = TestBed.inject(AdviceService);
    expect(service).toBeTruthy();
  });

  it(`should emit 'Loading advice...' at the beginning`, fakeAsync(() => {
    const service = TestBed.inject(AdviceService);
    let advice: string;
    subscription = service.advices.subscribe(value => advice = value);

    expect(advice).toBe('Loading advice...');

    subscription.unsubscribe();
  }));

  it('should emit advice as soon as http client returns data', fakeAsync(() => {
    const service = TestBed.inject(AdviceService);
    let advice: string;
    subscription = service.advices.subscribe(value => advice = value);

    tick();
    const req = httpTestingController.expectOne('https://api.adviceslip.com/advice');
    expect(req.request.method).toEqual('GET');
    req.flush({ slip: { id: 1, advice: 'advice' } });
    expect(advice).toBe('advice');

    httpTestingController.verify();
    subscription.unsubscribe();
  }));

  it('should emit advice every 20 seconds', fakeAsync(() => {
    const service = TestBed.inject(AdviceService);
    let advice: string;
    subscription = service.advices.subscribe(value => advice = value);

    tick(60000);
    const req = httpTestingController.match('https://api.adviceslip.com/advice');
    expect(req.length).toBe(4);

    httpTestingController.verify();
    subscription.unsubscribe();
  }));
});

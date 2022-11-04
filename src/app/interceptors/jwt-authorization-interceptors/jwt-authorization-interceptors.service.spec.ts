import { TestBed } from '@angular/core/testing';

import { JwtAuthorizationInterceptorsService } from './jwt-authorization-interceptors.service';

describe('JwtAuthorizationInterceptorsService', () => {
  let service: JwtAuthorizationInterceptorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtAuthorizationInterceptorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GetUsersInformationsService } from './get-user-informations.service';

describe('GetUserInformationsService', () => {
  let service: GetUsersInformationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetUsersInformationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

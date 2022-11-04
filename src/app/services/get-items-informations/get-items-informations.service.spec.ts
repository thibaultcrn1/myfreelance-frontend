import { TestBed } from '@angular/core/testing';

import { GetItemsInformationsService } from './get-items-informations.service';

describe('GetItemsInformationsService', () => {
  let service: GetItemsInformationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetItemsInformationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

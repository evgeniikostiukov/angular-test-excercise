import { TestBed } from '@angular/core/testing';

import { CalcOfferService } from './calc-offer.service';

describe('CalcOfferService', () => {
  let service: CalcOfferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcOfferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

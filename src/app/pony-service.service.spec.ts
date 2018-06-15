import { TestBed, inject } from '@angular/core/testing';

import { PonyServiceService } from './pony-service.service';

describe('PonyServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PonyServiceService]
    });
  });

  it('should be created', inject([PonyServiceService], (service: PonyServiceService) => {
    expect(service).toBeTruthy();
  }));
});

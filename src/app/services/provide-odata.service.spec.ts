import { TestBed, inject } from '@angular/core/testing';

import { ProvideOdataService } from './provide-odata.service';

describe('ProvideOdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProvideOdataService]
    });
  });

  it('should be created', inject([ProvideOdataService], (service: ProvideOdataService) => {
    expect(service).toBeTruthy();
  }));
});

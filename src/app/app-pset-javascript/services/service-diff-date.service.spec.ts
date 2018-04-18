import { TestBed, inject } from '@angular/core/testing';

import { ServiceDiffDateService } from './service-diff-date.service';

describe('ServiceDiffDateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceDiffDateService]
    });
  });

  it('should be created', inject([ServiceDiffDateService], (service: ServiceDiffDateService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { ServiceReclamationService } from './service-reclamation.service';

describe('ServiceReclamationService', () => {
  let service: ServiceReclamationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceReclamationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

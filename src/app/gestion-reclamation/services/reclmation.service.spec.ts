import { TestBed } from '@angular/core/testing';

import { ReclmationService } from './reclmation.service';

describe('ReclmationService', () => {
  let service: ReclmationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReclmationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

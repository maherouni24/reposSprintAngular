import { TestBed } from '@angular/core/testing';

import { SiteArcheoService } from './site-archeo.service';

describe('SiteArcheoService', () => {
  let service: SiteArcheoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiteArcheoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

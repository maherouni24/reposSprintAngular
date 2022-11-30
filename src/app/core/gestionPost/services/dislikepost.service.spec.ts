import { TestBed } from '@angular/core/testing';

import { DislikepostService } from './dislikepost.service';

describe('DislikepostService', () => {
  let service: DislikepostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DislikepostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

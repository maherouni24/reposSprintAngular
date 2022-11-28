import { TestBed } from '@angular/core/testing';

import { CommentpostService } from './commentpost.service';

describe('CommentpostService', () => {
  let service: CommentpostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentpostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

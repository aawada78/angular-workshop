import { TestBed, inject } from '@angular/core/testing';

import { GuestBookService } from './guest-book.service';

describe('GuestBookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuestBookService]
    });
  });

  it('should be created', inject([GuestBookService], (service: GuestBookService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { AdminJobseekersService } from './admin-jobseekers.service';

describe('AdminJobseekersService', () => {
  let service: AdminJobseekersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminJobseekersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { StudentMangementService } from './student-mangement.service';

describe('StudentMangementService', () => {
  let service: StudentMangementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentMangementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

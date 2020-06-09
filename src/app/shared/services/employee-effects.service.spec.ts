import { TestBed } from '@angular/core/testing';

import { EmployeeEffectsService } from './employee-effects.service';

describe('EmployeeEffectsService', () => {
  let service: EmployeeEffectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeEffectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

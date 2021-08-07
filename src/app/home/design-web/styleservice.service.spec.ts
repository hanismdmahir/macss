import { TestBed } from '@angular/core/testing';

import { StyleserviceService } from './styleservice.service';

describe('StyleserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StyleserviceService = TestBed.get(StyleserviceService);
    expect(service).toBeTruthy();
  });
});

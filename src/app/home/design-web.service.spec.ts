import { TestBed } from '@angular/core/testing';

import { DesignWebService } from './design-web.service';

describe('DesignWebService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DesignWebService = TestBed.get(DesignWebService);
    expect(service).toBeTruthy();
  });
});

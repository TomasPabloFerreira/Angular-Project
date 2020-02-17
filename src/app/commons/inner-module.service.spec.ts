import { TestBed } from '@angular/core/testing';

import { InnerModuleService } from './inner-module.service';

describe('InnerModuleService', () => {
  let service: InnerModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InnerModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

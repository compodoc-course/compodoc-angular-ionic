import { TestBed, inject } from '@angular/core/testing';

import { CurrentService } from './current.service';

describe('CurrentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CurrentService] });
  });

  it('should be created', inject([CurrentService], (service: CurrentService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { StayService } from './stay.service';

describe('StayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StayService]
    });
  });

  it('should be created', inject([StayService], (service: StayService) => {
    expect(service).toBeTruthy();
  }));
});

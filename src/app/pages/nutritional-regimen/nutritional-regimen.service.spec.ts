import { TestBed, inject } from '@angular/core/testing';

import { NutritionalRegimenService } from './nutritional-regimen.service';

describe('NutritionalRegimenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NutritionalRegimenService]
    });
  });

  it('should be created', inject([NutritionalRegimenService], (service: NutritionalRegimenService) => {
    expect(service).toBeTruthy();
  }));
});

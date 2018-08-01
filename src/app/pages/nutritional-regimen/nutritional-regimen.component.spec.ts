import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionalRegimenComponent } from './nutritional-regimen.component';

describe('NutritionalRegimenComponent', () => {
  let component: NutritionalRegimenComponent;
  let fixture: ComponentFixture<NutritionalRegimenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutritionalRegimenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionalRegimenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

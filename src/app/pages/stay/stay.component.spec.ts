import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StayComponent } from './stay.component';

describe('StayComponent', () => {
  let component: StayComponent;
  let fixture: ComponentFixture<StayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

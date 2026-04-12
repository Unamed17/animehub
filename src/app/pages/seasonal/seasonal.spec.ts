import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seasonal } from './seasonal';

describe('Seasonal', () => {
  let component: Seasonal;
  let fixture: ComponentFixture<Seasonal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Seasonal],
    }).compileComponents();

    fixture = TestBed.createComponent(Seasonal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bleach } from './bleach';

describe('Bleach', () => {
  let component: Bleach;
  let fixture: ComponentFixture<Bleach>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bleach],
    }).compileComponents();

    fixture = TestBed.createComponent(Bleach);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

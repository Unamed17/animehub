import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blackclover } from './blackclover';

describe('Blackclover', () => {
  let component: Blackclover;
  let fixture: ComponentFixture<Blackclover>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blackclover],
    }).compileComponents();

    fixture = TestBed.createComponent(Blackclover);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathNote } from './death-note';

describe('DeathNote', () => {
  let component: DeathNote;
  let fixture: ComponentFixture<DeathNote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeathNote],
    }).compileComponents();

    fixture = TestBed.createComponent(DeathNote);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

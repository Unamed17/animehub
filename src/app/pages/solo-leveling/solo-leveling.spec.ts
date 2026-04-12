import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloLeveling } from './solo-leveling';

describe('SoloLeveling', () => {
  let component: SoloLeveling;
  let fixture: ComponentFixture<SoloLeveling>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoloLeveling],
    }).compileComponents();

    fixture = TestBed.createComponent(SoloLeveling);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

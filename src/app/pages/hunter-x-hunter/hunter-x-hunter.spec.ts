import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HunterXHunter } from './hunter-x-hunter';

describe('HunterXHunter', () => {
  let component: HunterXHunter;
  let fixture: ComponentFixture<HunterXHunter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HunterXHunter],
    }).compileComponents();

    fixture = TestBed.createComponent(HunterXHunter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

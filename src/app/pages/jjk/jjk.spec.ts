import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jjk } from './jjk';

describe('Jjk', () => {
  let component: Jjk;
  let fixture: ComponentFixture<Jjk>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jjk],
    }).compileComponents();

    fixture = TestBed.createComponent(Jjk);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

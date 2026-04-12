import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePiece } from './one-piece';

describe('OnePiece', () => {
  let component: OnePiece;
  let fixture: ComponentFixture<OnePiece>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnePiece],
    }).compileComponents();

    fixture = TestBed.createComponent(OnePiece);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

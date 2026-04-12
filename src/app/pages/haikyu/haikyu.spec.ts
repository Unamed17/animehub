import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Haikyu } from './haikyu';

describe('Haikyu', () => {
  let component: Haikyu;
  let fixture: ComponentFixture<Haikyu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Haikyu],
    }).compileComponents();

    fixture = TestBed.createComponent(Haikyu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

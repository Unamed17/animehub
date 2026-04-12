import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHeroAcademia } from './my-hero-academia';

describe('MyHeroAcademia', () => {
  let component: MyHeroAcademia;
  let fixture: ComponentFixture<MyHeroAcademia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyHeroAcademia],
    }).compileComponents();

    fixture = TestBed.createComponent(MyHeroAcademia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGallery } from './my-gallery';

describe('MyGallery', () => {
  let component: MyGallery;
  let fixture: ComponentFixture<MyGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyGallery],
    }).compileComponents();

    fixture = TestBed.createComponent(MyGallery);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carusel } from './carusel';

describe('Carusel', () => {
  let component: Carusel;
  let fixture: ComponentFixture<Carusel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carusel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carusel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

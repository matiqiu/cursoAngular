import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCarroComponent } from './detalle-carro.component';

describe('DetalleCarroComponent', () => {
  let component: DetalleCarroComponent;
  let fixture: ComponentFixture<DetalleCarroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleCarroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

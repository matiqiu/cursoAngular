import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroClienteComponent } from './carro-cliente.component';

describe('CarroClienteComponent', () => {
  let component: CarroClienteComponent;
  let fixture: ComponentFixture<CarroClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarroClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarroClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaAveComponent } from './tarjeta-ave.component';

describe('TarjetaAveComponent', () => {
  let component: TarjetaAveComponent;
  let fixture: ComponentFixture<TarjetaAveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaAveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaAveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

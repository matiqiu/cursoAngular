import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarroClienteComponent } from './carro-cliente.component';



@NgModule({
  declarations: [
    CarroClienteComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CarroClienteComponent
  ]
})
export class CarroClienteModule { }

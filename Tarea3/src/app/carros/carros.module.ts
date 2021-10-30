import { CarroClienteModule } from './carro-cliente/carro-cliente.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCarrosComponent } from './lista-carros/lista-carros.component';
import { DetalleCarroComponent } from './detalle-carro/detalle-carro.component';
import { ProductosModule } from '../productos/productos.module';



@NgModule({
  declarations: [
    ListaCarrosComponent,
    DetalleCarroComponent,
  ],
  imports: [
    CommonModule,
    ProductosModule,
    CarroClienteModule
  ],
  exports: [
    ListaCarrosComponent
  ]
})
export class CarrosModule { }

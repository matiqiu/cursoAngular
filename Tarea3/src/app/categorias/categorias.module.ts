import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCategoriasComponent } from './lista-categorias/lista-categorias.component';
import { CrearCategoriaComponent } from './crear-categoria/crear-categoria.component';



@NgModule({
  declarations: [
    ListaCategoriasComponent,
    CrearCategoriaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListaCategoriasComponent
  ]
})
export class CategoriasModule { }

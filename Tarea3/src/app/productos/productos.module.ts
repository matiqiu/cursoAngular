import { CategoriasModule } from './../categorias/categorias.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';
import { DetalleProductoComponent } from './componentes/detalle-producto/detalle-producto.component';
import { CrearProductoComponent } from './componentes/crear-producto/crear-producto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditarProductoComponent } from './componentes/editar-producto/editar-producto.component';



@NgModule({
  declarations: [
    ListaProductosComponent,
    DetalleProductoComponent,
    CrearProductoComponent,
    EditarProductoComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    // Para usar los formularios
    FormsModule,
    ReactiveFormsModule,
    // Fin para usar los formularios
    CategoriasModule,
  ],
  exports: [
    DetalleProductoComponent,
    ListaProductosComponent
  ]
})
export class ProductosModule { }

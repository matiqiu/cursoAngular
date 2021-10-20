import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarruselGatosComponent } from './componentes/carrusel-gatos/carrusel-gatos.component';
import { ListaRegionesComponent } from './componentes/lista-regiones/lista-regiones.component';

@NgModule({
  declarations: [
    AppComponent,
    CarruselGatosComponent,
    ListaRegionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

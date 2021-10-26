import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAvesComponent } from './componentes/lista-aves/lista-aves.component';
import { DetalleListaAveComponent } from './componentes/detalle-lista-ave/detalle-lista-ave.component';
import { CargaDetalleAveComponent } from './componentes/carga-detalle-ave/carga-detalle-ave.component';
import { RobotComponent } from './componentes/robot/robot.component';
import { TarjetaAveComponent } from './componentes/tarjeta-ave/tarjeta-ave.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaAvesComponent,
    DetalleListaAveComponent,
    CargaDetalleAveComponent,
    RobotComponent,
    TarjetaAveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
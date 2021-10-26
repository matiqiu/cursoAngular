import {  Component, EventEmitter, Input, OnInit, ViewChild,Output } from '@angular/core';
import { Ave } from '../lista-aves/data/lista-ave.interface';
import { CargaDetalleAveComponent } from '../carga-detalle-ave/carga-detalle-ave.component';




@Component({
  selector: 'app-tarjeta-ave',
  templateUrl: './tarjeta-ave.component.html',
  styleUrls: ['./tarjeta-ave.component.css']
})
export class TarjetaAveComponent implements OnInit {

  cargandoAves: boolean = false;
  @Input() avesFiltradas: Ave[] = [];
  @Output() aveClickeada = new EventEmitter<Ave>();
  
 @ViewChild('cargaDetalleAve', { static: false })
  cargaDetalleAveComponent!: CargaDetalleAveComponent;

  constructor() { }

  ngOnInit(): void {
  }

  mostrarListaAves(avesFiltradas: Ave[]): void {
    this.avesFiltradas=avesFiltradas;
    this.cargaDetalleAveComponent.recargar()
  }

  asignarAveClickeada(ave: Ave) {
    console.log(ave);
    this.aveClickeada.emit(ave);
  }

}
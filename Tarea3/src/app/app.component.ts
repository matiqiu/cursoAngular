import { HijoComponent } from './componentes/hijo/hijo.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string = 'Hola!';

  loading: boolean = true;
  numeros: number[] = [5, 7, 8, 10];

  numero: number = 42;

  edadDelHijo: number = this.numeros[2];

  @ViewChild('elHijo', {static: false})
  elHijo!: HijoComponent;
  
  ngOnInit() {
    if (this.elHijo) {
      this.elHijo.cargarAves();
    }
  }

  edadCambiada(nuevaEdad: number) {
    this.edadDelHijo = nuevaEdad;
  }
  
  cambiarEdadDelHijo() {
    this.numero = this.numero * 2;
  }

}

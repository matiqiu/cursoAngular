import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  // @Input('edadHijo') edad: number = 0;
  _edad: number = 0;
  get edad(): number {
    return this._edad;
  }
  @Input('edadHijo') set edad(nuevaEdad: number) {
    this._edad = nuevaEdad;
    this.onEdadChanged.emit(this.edad);
    this.cargarAves();
  }

  @Output() onEdadChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  aumentarEdad() {
    this.edad++;
    this.onEdadChanged.emit(this.edad);
  }

  cargarAves() {
    // this.http.get(url)...
  }

}

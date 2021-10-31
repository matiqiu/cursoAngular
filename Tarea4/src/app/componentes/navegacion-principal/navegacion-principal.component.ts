import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegacion-principal',
  templateUrl: './navegacion-principal.component.html',
  styleUrls: ['./navegacion-principal.component.css']
})
export class NavegacionPrincipalComponent implements OnInit {

  rutaInicio = '/inicio';

  constructor() { }

  ngOnInit(): void {
  }

}

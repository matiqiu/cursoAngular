import { ColorRobot, RobotComponent } from './componentes/robot/robot.component';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title: string = 'Mi Aplicación';

  @ViewChild('miModal', { static: false })
  miModal!: ElementRef;

  @ViewChild('robot', {static: false})
  robot!: RobotComponent;

  contador: number = 0;
  detenerHasta: number = 5;

  ngOnInit() {

  }

  // private privada: string = 'hola';

  // numeros: number = 42;

  // funcion(): string {
  //   return this.title + '!!!!';
  // }

  mostrarModal() {
    console.log(this.miModal);
    const nativeElement = this.miModal.nativeElement;
    console.log(nativeElement);
    // https://www.w3schools.com/howto/howto_js_remove_class.asp
    nativeElement.classList.remove("fade");
    nativeElement.classList.remove("hide-modal");
    nativeElement.classList.add("display-modal");
  }

  ocultarModal() {
    const nativeElement = this.miModal.nativeElement;
    nativeElement.classList.remove("display-modal");
    nativeElement.classList.add("fade");
    nativeElement.classList.add("hide-modal");
  }

  imprimirColor(color: ColorRobot) {
    console.log('imprimiendo color', color);
    this.contador++;
    if (this.contador >= this.detenerHasta) {
      this.robot.detenerInterval();
    }
  }

}
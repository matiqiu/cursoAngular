import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

export type ColorRobot = 'red' | 'blue' | 'green';

@Component({
  selector: 'app-robot',
  templateUrl: './robot.component.html',
  styleUrls: ['./robot.component.css']
})
export class RobotComponent implements OnInit, OnChanges, OnDestroy {

  @Input() color: ColorRobot = 'red';

  @Output() colorEmitido = new EventEmitter<ColorRobot>();

  interval: any;

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.interval = setInterval(() => {
      console.log('dentro del intervalo');
      if (this.color === 'red') {
        this.color = 'blue';
      } else if (this.color === 'blue') {
        this.color = 'green'
      } else {
        this.color = 'red';
      }
      this.colorEmitido.emit(this.color);
    }, 1000);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes robot', changes);
  }

  ngOnDestroy() {
    console.log('on destroy robot');
    clearInterval(this.interval);
  }

  detenerInterval() {
    // clearInterval(this.interval);
  }

}
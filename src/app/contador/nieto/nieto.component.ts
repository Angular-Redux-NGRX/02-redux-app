import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: [
  ]
})
export class NietoComponent implements OnInit {

  @Input() contador:number=0;
  @Output() contadorCambio = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  reset(){
    this.contador = 0;
    this.contadorCambio.emit(this.contador);
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Reset } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: [
  ]
})
export class NietoComponent implements OnInit {

  contador:number=0
  // @Input() contador:number=0;
  // @Output() contadorCambio = new EventEmitter<number>();
  constructor(private store:Store<AppState>) {
    store.select('contador').subscribe( contador => this.contador = contador  );
   }

  ngOnInit(): void {
  }
  reset(){
    //this.contador = 0;
    //this.contadorCambio.emit(this.contador);
    this.store.dispatch(Reset());
  }

}

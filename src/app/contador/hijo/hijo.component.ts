import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Dividir, Multiplicar } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [
  ]
})
export class HijoComponent implements OnInit {

contador: number=0;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('contador').subscribe( contador => this.contador = contador );
  }

  multiplicar(){
    this.store.dispatch( Multiplicar({numero: 2}) );
  }

  dividir(){
    this.store.dispatch( Dividir({numero: 2}) );
  }

}

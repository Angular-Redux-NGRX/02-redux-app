import { Action, createReducer, on } from "@ngrx/store";
import { Decrementar, Dividir, Incrementar, Multiplicar, Reset } from './contador.actions';

// export function contadorReducer(state:number = 10,action:Action){
//    switch(action.type){

//     case Incrementar.type:
//       return state + 1;

//     case Decrementar.type:
//       return state - 1;

//     default:
//       return state;
//    }
// }

export const initialState = 10;

const _contadorReducer = createReducer(
  initialState,
  on(Incrementar, (state) => state + 1),
  on(Decrementar, (state) => state - 1),
  on(Multiplicar, (state, { numero }) => state * numero),
  on(Dividir, (state, { numero }) => state / numero),
  on(Reset, (state) => initialState),
);

export function contadorReducer(state:any, action:Action) {
  return _contadorReducer(state, action);
}

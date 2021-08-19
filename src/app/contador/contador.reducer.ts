import { Action } from "@ngrx/store";
import { Decrementar, Incrementar } from './contador.actions';

export function contadorReducer(state:number = 10,action:Action){
   switch(action.type){

    case Incrementar.type:
      return state + 1;

    case Decrementar.type:
      return state - 1;

    default:
      return state;
   }
}

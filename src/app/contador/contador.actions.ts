import { createAction, props } from '@ngrx/store';

export const Incrementar = createAction('[Contador] Incrementar');
export const Decrementar = createAction('[Contador] Decrementar');

export const Multiplicar = createAction('[Contador] Multiplicar',
                                        props<{numero:number}>());

export const Dividir = createAction('[Contador] Dividir',
                                    props<{numero:number}>());

export const Reset = createAction('[Contador] Reset')

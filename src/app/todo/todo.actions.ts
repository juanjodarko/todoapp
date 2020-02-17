import { Action } from '@ngrx/store';

export const ADD_TODO = '[TODO] Agregar todo';
export const TOGGLE_TODO = '[TODO] Toggle todo';
export const TOGGLE_ALL_TODO = '[TODO] Toggle all';
export const EDIT_TODO = '[TODO] Edit todo';
export const DELETE_TODO = '[TODO] Delete todo';
export const DELETE_COMPLETED = '[TODO] Delete completed';

export class AddTodoAction implements Action {
  readonly type = ADD_TODO;
  constructor( public texto: string) {}
}

export class ToggleTodoAction implements Action {
  readonly type = TOGGLE_TODO;
  constructor( public id: number) {}
}

export class ToggleAllTodoAction implements Action {
  readonly type = TOGGLE_ALL_TODO;
  constructor( public completed: boolean ) {}
}

export class EditTodoAction implements Action {
  readonly type = EDIT_TODO;
  constructor( public id: number, public texto: string ) {}
}

export class DeleteTodoAction implements Action {
  readonly type = DELETE_TODO;
  constructor( public id: number ) {}

}

export class DeleteCompletedAction implements Action {
  readonly type = DELETE_COMPLETED;
}

export type Acciones = AddTodoAction | ToggleTodoAction | ToggleAllTodoAction | EditTodoAction | DeleteTodoAction | DeleteCompletedAction;

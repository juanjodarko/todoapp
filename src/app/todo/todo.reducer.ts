import * as fromTodo from './todo.actions';
import { Todo } from './todo.model';

const initialState: Todo[] = [new Todo('Vencer a Thanos'), new Todo('Salvar el mundo')];

export function todoReducer ( state = initialState, action: fromTodo.Acciones ) {
  switch (action.type) {
    case fromTodo.ADD_TODO:
      const todo = new Todo( action.texto );
      return [ ...state, todo ];

    case fromTodo.TOGGLE_TODO:
      return state.map( todoEdit => {
        if ( todoEdit.id === action.id ) {
          return {
            ...todoEdit,
            completed: !todoEdit.completed
          };
        } else {
          return todoEdit;
        }
      });

    case fromTodo.TOGGLE_ALL_TODO:
      return state.map( todoEdit => {
        return {
          ...todoEdit,
          completed: action.completed
        }
      });

    case fromTodo.EDIT_TODO:
      return state.map( todoEdit => {
        if (todoEdit.id === action.id ) {
          return {
            ...todoEdit,
            texto: action.texto
          };
        } else {
          return todoEdit
        }
      });

    case fromTodo.DELETE_TODO:
      return state.filter( todoEdit => todoEdit.id !== action.id );

    case fromTodo.DELETE_COMPLETED:
      return state.filter( todoEdit => !todoEdit.completed);

    default:
      return state;
  }
}

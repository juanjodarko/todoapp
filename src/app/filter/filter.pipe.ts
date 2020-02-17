import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/todo.model';
import * as fromFiltro from './filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform( todos: Todo[], filtro: fromFiltro.filtrosValidos ): unknown {
    switch (filtro) {
      case 'completados':
        return todos.filter( todo => todo.completed);
      case 'pendientes':
        return todos.filter( todo => !todo.completed);
      default:
        return todos;
    }

    return todos;
  }

}

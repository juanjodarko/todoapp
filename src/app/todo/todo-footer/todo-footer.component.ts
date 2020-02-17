import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import * as fromFiltro from '../../filter/filter.actions';
import { Todo } from '../todo.model';
import * as fromTodo from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {
  filtrosValidos: Array<fromFiltro.filtrosValidos> = ['todos', 'completados', 'pendientes'];
  filtroActual: fromFiltro.filtrosValidos;
  pendientes: number;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.subscribe( state => {
      this.filtroActual = state.filter;
      this.countPending(state.todos);

    });
  }

  changeFilter(nuevoFiltro: fromFiltro.filtrosValidos) {
    const action = new fromFiltro.SetFilterAction(nuevoFiltro);
    this.store.dispatch(action);
  }

  countPending(todos: Todo[]) {
    this.pendientes = todos.filter(todo => !todo.completed).length;
  }

  clearAllCompleted() {
    this.store.dispatch(new fromTodo.DeleteCompletedAction());
  }

}

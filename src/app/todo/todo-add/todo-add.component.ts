import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import * as fromTodo from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {
  textoInput: FormControl;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.textoInput = new FormControl('', Validators.required)
  }

  addTodo() {
    if (this.textoInput.invalid) {
      return;
    }

    const accion = new fromTodo.AddTodoAction(this.textoInput.value);
    this.store.dispatch(accion);
    this.textoInput.setValue('');
  }

}

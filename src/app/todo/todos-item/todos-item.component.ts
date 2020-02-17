import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from '../todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { ToggleTodoAction, EditTodoAction, DeleteTodoAction } from '../todo.actions';


@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.scss']
})
export class TodosItemComponent implements OnInit {
  @Input() todo: Todo;
  chkField: FormControl;
  textoInput: FormControl;
  editing: boolean;
  @ViewChild('textoInputRef') textoInputRef: ElementRef

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.chkField = new FormControl( this.todo.completed );
    this.textoInput = new FormControl( this.todo.texto, Validators.required );
    console.log(this.todo);
    this.chkField.valueChanges.subscribe( value => {
      const action = new ToggleTodoAction( this.todo.id );
      this.store.dispatch(action);
    });
  }

  editar() {
    this.editing = true;
    setTimeout( () => {
      this.textoInputRef.nativeElement.focus();
    }, 1);
  }

  endEdit() {
    this.editing = false;
    if (this.textoInput.invalid || this.textoInput.value === this.todo.texto) {
      return;
    }
    const action = new EditTodoAction( this.todo.id, this.textoInput.value );
    this.store.dispatch(action);
  }

  deleteTodo() {
    const accion = new DeleteTodoAction( this.todo.id );
    this.store.dispatch(accion);
  }

}

import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Todo } from './models/todo';
import { TodosService } from './shared/todos.service';

@Component({
  selector: 'nde-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  hasError = false;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todosService
      .query()
      .subscribe(todos => (this.todos = todos), () => (this.hasError = true));
  }

  createTodo(todo: Todo) {
    this.todosService
      .create(todo)
      .pipe(switchMap(() => this.todosService.query()))
      .subscribe(todos => (this.todos = todos));
  }

  updateTodo(todo: Todo) {
    this.todosService
      .update(todo)
      .pipe(switchMap(() => this.todosService.query()))
      .subscribe(todos => (this.todos = todos));
  }

  deleteTodo(todo: Todo) {
    this.todosService
      .delete(todo)
      .pipe(switchMap(() => this.todosService.query()))
      .subscribe(todos => (this.todos = todos));
  }
}

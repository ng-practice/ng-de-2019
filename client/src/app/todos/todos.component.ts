import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Todo } from './models/todo';
import { TodosService } from './shared/todos.service';

@Component({
  selector: 'nde-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit, OnDestroy {
  private sink = new Subscription();

  todos: Todo[];
  hasError = false;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todosService
      .query()
      .subscribe(todos => (this.todos = todos), () => (this.hasError = true));
  }

  ngOnDestroy(): void {
    this.sink.unsubscribe();
  }

  createTodo(todo: Todo) {
    this.sink.add(
      this.todosService
        .create(todo)
        .pipe(switchMap(() => this.todosService.query()))
        .subscribe(todos => (this.todos = todos))
    );
  }

  updateTodo(todo: Todo) {
    this.sink.add(
      this.todosService
        .update(todo)
        .pipe(switchMap(() => this.todosService.query()))
        .subscribe(todos => (this.todos = todos))
    );
  }

  deleteTodo(todo: Todo) {
    this.sink.add(
      this.todosService
        .delete(todo)
        .pipe(switchMap(() => this.todosService.query()))
        .subscribe(todos => (this.todos = todos))
    );
  }
}

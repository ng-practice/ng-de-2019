import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap, withLatestFrom } from 'rxjs/operators';
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

  @HostBinding('class') cssClass = 'todo__app';

  constructor(
    private route: ActivatedRoute,
    private todosService: TodosService
  ) {}

  ngOnInit(): void {
    this.sink.add(
      this.route.paramMap
        .pipe(
          switchMap(paramMap => this.todosService.query(paramMap.get('query')))
        )
        .subscribe(todos => (this.todos = todos))
    );
  }

  ngOnDestroy(): void {
    this.sink.unsubscribe();
  }

  createTodo(todo: Todo) {
    this.sink.add(
      this.todosService
        .create(todo)
        .pipe(
          withLatestFrom(this.route.paramMap),
          switchMap(([, paramMap]) =>
            this.todosService.query(paramMap.get('query'))
          )
        )
        .subscribe(todos => (this.todos = todos))
    );
  }

  updateTodo(todo: Todo) {
    this.sink.add(
      this.todosService
        .update(todo)
        .pipe(
          withLatestFrom(this.route.paramMap),
          switchMap(([, paramMap]) =>
            this.todosService.query(paramMap.get('query'))
          )
        )
        .subscribe(todos => (this.todos = todos))
    );
  }

  deleteTodo(todo: Todo) {
    this.sink.add(
      this.todosService
        .delete(todo)
        .pipe(
          withLatestFrom(this.route.paramMap),
          switchMap(([, paramMap]) =>
            this.todosService.query(paramMap.get('query'))
          )
        )
        .subscribe(todos => (this.todos = todos))
    );
  }
}

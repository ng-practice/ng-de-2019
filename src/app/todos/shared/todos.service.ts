import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../models';

@Injectable({ providedIn: 'root' })
export class TodosService {
  todos: Todo[] = [
    { text: 'Buy milk', isDone: false },
    { text: 'Go running', isDone: true }
  ];

  constructor(private http: HttpClient) {}

  query(): Observable<Todo[]> {
    return of(this.todos);
  }

  create(todo: Todo): Observable<Todo> {
    this.todos = [todo, ...this.todos];
    return of(todo);
  }

  remove(todoForRemoval: Todo): Observable<Todo> {
    this.todos = this.todos.filter(todo => todo.text !== todoForRemoval.text);
    return of(todoForRemoval);
  }

  completeOrIncomplete(todoForUpdate: Todo): Observable<Todo> {
    this.todos = this.todos.map(todo =>
      todo.text === todoForUpdate.text
        ? this.toggleTodoState(todoForUpdate)
        : todo
    );

    return of(todoForUpdate);
  }

  private toggleTodoState(todoForUpdate: Todo): any {
    return {
      ...todoForUpdate,
      isDone: todoForUpdate.isDone ? false : true
    };
  }
}

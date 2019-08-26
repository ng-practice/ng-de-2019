import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ApiTodo, Todo } from '../models';

const todosUrl = 'http://localhost:3000/todos';

function mapToTodos() {
  return map<ApiTodo[], Todo[]>(apiTodos =>
    apiTodos.map(({ text, completed, id }) => ({ text, isDone: completed, id }))
  );
}

function mapToTodo() {
  return map<ApiTodo, Todo>(({ text, completed, id }) => ({
    text,
    isDone: completed,
    id
  }));
}

function convertToApiTodo({ text, isDone, id }: Todo): ApiTodo {
  return { text, completed: isDone, id };
}

@Injectable({ providedIn: 'root' })
export class TodosService {
  constructor(private http: HttpClient) {}

  query(param?: string): Observable<Todo[]> {
    return this.http
      .get<ApiTodo[]>(`${todosUrl}?query=${param ? param : 'all'}`)
      .pipe(
        mapToTodos(),
        tap(console.log)
      );
  }

  create(todo: Todo): Observable<Todo> {
    return this.http
      .post<ApiTodo>(todosUrl, convertToApiTodo(todo))
      .pipe(mapToTodo());
  }

  remove(todoForRemoval: Todo): Observable<Todo> {
    return this.http
      .delete<ApiTodo>(`${todosUrl}/${todoForRemoval.id}`)
      .pipe(mapToTodo());
  }

  completeOrIncomplete(todoForUpdate: Todo): Observable<Todo> {
    const updatedTodo = this.toggleTodoState(todoForUpdate);
    return this.http
      .put<ApiTodo>(
        `${todosUrl}/${todoForUpdate.id}`,
        convertToApiTodo(updatedTodo)
      )
      .pipe(mapToTodo());
  }

  private toggleTodoState(todoForUpdate: Todo): Todo {
    return {
      ...todoForUpdate,
      isDone: todoForUpdate.isDone ? false : true
    };
  }
}

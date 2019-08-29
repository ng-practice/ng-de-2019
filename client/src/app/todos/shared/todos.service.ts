import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

const todosUrl = 'http://localhost:3000/todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  constructor(private http: HttpClient) {}

  query(param?: string): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${todosUrl}?query=${param ? param : 'all'}`);
  }

  create(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(todosUrl, todo);
  }

  update(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${todosUrl}/${todo.id}`, {
      ...todo,
      isDone: !todo.isDone
    });
  }

  delete(todo: Todo): Observable<Todo> {
    return this.http.delete<Todo>(`${todosUrl}/${todo.id}`);
  }
}

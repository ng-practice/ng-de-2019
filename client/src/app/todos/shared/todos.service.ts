import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  constructor(private http: HttpClient) {}

  query(): Observable<Todo[]> {
    return this.http.get<Todo[]>('http://localhost:3000/todos');
  }

  create(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>('http://localhost:3000/todos', todo);
  }

  update(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`http://localhost:3000/todos/${todo.id}`, {
      ...todo,
      isDone: !todo.isDone
    });
  }

  delete(todo: Todo): Observable<Todo> {
    return this.http.delete<Todo>(`http://localhost:3000/todos/${todo.id}`);
  }
}

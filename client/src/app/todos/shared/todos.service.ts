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
}

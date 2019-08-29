import { Component, OnInit } from '@angular/core';
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

  addTodo(todo: Todo) {
    this.todos = [...this.todos, todo];
  }

  checkOrUncheckTodo(todoForUpdate: Todo): void {
    this.todos = this.todos.map(todo =>
      todo.text === todoForUpdate.text
        ? { ...todo, isDone: !todo.isDone }
        : todo
    );
  }
}

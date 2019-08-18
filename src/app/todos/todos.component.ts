import { Component } from '@angular/core';
import { Todo } from './models';

@Component({
  selector: 'nde-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  todos: Todo[] = [
    { text: 'Buy milk', isDone: false },
    { text: 'Go running', isDone: true }
  ];

  addTodo(newTodo: Todo) {
    this.todos = [newTodo, ...this.todos];
  }
}

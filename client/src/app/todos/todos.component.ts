import { Component } from '@angular/core';
import { Todo } from './models/todo';

@Component({
  selector: 'nde-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  todos: Todo[] = [
    {
      text: 'Buy 🥛',
      isDone: true
    },
    {
      text: 'Plant 🌳',
      isDone: true
    },
    {
      text: 'Build 🏡',
      isDone: false
    }
  ];

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

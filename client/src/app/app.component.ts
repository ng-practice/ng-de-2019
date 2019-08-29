import { Component } from '@angular/core';
import { Todo } from './models/todo';

@Component({
  selector: 'nde-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

  checkOrUncheckTodo(todoForUpdate: Todo): void {
    this.todos = this.todos.map(todo =>
      todo.text === todoForUpdate.text
        ? { ...todo, isDone: !todo.isDone }
        : todo
    );
  }
}

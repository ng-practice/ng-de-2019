import { Component } from '@angular/core';

@Component({
  selector: 'nde-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos = [
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

  checkOrUncheckTodo(todoForUpdate) {
    this.todos = this.todos.map(todo =>
      todo.text === todoForUpdate.text
        ? { ...todo, isDone: !todo.isDone }
        : todo
    );
  }
}

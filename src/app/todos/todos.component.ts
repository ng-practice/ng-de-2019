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

  get activeTodos() {
    return this.todos.filter(todo => !todo.isDone).length;
  }

  addTodo(newTodo: Todo) {
    this.todos = [newTodo, ...this.todos];
  }

  completeOrIncompleteTodo(todoForUpdate: Todo) {
    this.todos = this.todos.map(todo =>
      todo.text === todoForUpdate.text
        ? this.toggleTodoState(todoForUpdate)
        : todo
    );
  }

  removeTodo(todoForRemoval: Todo) {
    this.todos = this.todos.filter(todo => todo.text !== todoForRemoval.text);
  }

  private toggleTodoState(todoForUpdate: Todo): any {
    return {
      ...todoForUpdate,
      isDone: todoForUpdate.isDone ? false : true
    };
  }
}

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

  completeOrIncompleteTodo(todoForUpdate: Todo) {
    this.todos = this.todos.map(todo =>
      todo.text === todoForUpdate.text
        ? this.toggleTodoState(todoForUpdate)
        : todo
    );
  }

  private toggleTodoState(todoForUpdate: Todo): any {
    return {
      ...todoForUpdate,
      isDone: todoForUpdate.isDone ? false : true
    };
  }
}

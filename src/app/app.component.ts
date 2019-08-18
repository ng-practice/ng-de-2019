import { Component } from '@angular/core';
import { Todo } from './todos/models';

@Component({
  selector: 'nde-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todos';
  todo: Todo = { text: 'Have fun', isDone: true };

  completeOrIncomplete(todo: Todo) {
    todo.isDone = todo.isDone ? false : true;
  }
}

import { Component } from '@angular/core';
import { Todo } from '../models';

@Component({
  selector: 'nde-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent {
  todos: Todo[] = [
    { text: 'Buy milk', isDone: false },
    { text: 'Go running', isDone: true }
  ];
}

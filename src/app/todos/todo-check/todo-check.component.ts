import { Component, Input } from '@angular/core';
import { Todo } from '../models';

@Component({
  selector: 'nde-todo-check',
  templateUrl: './todo-check.component.html',
  styleUrls: ['./todo-check.component.scss']
})
export class TodoCheckComponent {
  @Input() todo: Todo;
}

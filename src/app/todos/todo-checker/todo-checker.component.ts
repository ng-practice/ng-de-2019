import { Component, Input } from '@angular/core';
import { Todo } from '../models';

@Component({
  selector: 'nde-todo-checker',
  templateUrl: './todo-checker.component.html',
  styleUrls: ['./todo-checker.component.scss']
})
export class TodoCheckerComponent {
  @Input() todo: Todo;
}

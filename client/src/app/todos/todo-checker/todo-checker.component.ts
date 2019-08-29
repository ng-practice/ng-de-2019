import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'nde-todo-checker',
  templateUrl: './todo-checker.component.html',
  styleUrls: ['./todo-checker.component.scss']
})
export class TodoCheckerComponent implements OnInit {
  @Input() todo: Todo;
  @Output() toggle = new EventEmitter<Todo>();

  constructor() {}

  emitToggle() {
    this.toggle.emit(this.todo);
  }

  ngOnInit() {}
}

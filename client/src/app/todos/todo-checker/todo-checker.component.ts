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
  @Output() delete = new EventEmitter<Todo>();

  constructor() {}

  emitToggle() {
    this.toggle.emit(this.todo);
  }

  emitDelete() {
    this.delete.emit(this.todo);
  }

  ngOnInit() {}
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'nde-todo-quick-add',
  templateUrl: './todo-quick-add.component.html',
  styleUrls: ['./todo-quick-add.component.scss']
})
export class TodoQuickAddComponent implements OnInit {
  @Output() create = new EventEmitter<Todo>();

  constructor() {}

  ngOnInit() {}

  emitCreate(textInput: HTMLInputElement) {
    this.create.emit({
      text: textInput.value,
      isDone: false
    });
    textInput.value = '';
  }
}

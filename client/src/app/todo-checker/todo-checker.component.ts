import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'nde-todo-checker',
  templateUrl: './todo-checker.component.html',
  styleUrls: ['./todo-checker.component.scss']
})
export class TodoCheckerComponent implements OnInit {
  @Input() todo;
  @Output() toggle = new EventEmitter();

  constructor() {}

  emitToggle() {
    this.toggle.emit(this.todo);
  }

  ngOnInit() {}
}

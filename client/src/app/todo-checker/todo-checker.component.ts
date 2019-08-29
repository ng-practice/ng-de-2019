import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nde-todo-checker',
  templateUrl: './todo-checker.component.html',
  styleUrls: ['./todo-checker.component.scss']
})
export class TodoCheckerComponent implements OnInit {
  todo = {
    text: 'Buy 🥛',
    isDone: true
  };

  constructor() {}

  emitToggle() {
    alert(`${this.todo.text} was clicked.`);
  }

  ngOnInit() {}
}

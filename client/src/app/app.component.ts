import { Component } from '@angular/core';

@Component({
  selector: 'nde-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todo = {
    text: 'Buy 🥛',
    isDone: true
  };

  notify(todo) {
    alert(`${todo.text} was clicked.`);
  }
}

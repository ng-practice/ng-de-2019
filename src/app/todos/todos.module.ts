import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodoCheckerComponent } from './todo-checker/todo-checker.component';
import { TodoQuickAddComponent } from './todo-quick-add/todo-quick-add.component';
import { TodosComponent } from './todos.component';
import { TodoCounterComponent } from './todo-counter/todo-counter.component';

@NgModule({
  declarations: [TodoCheckerComponent, TodoQuickAddComponent, TodosComponent, TodoCounterComponent],
  imports: [CommonModule],
  exports: [TodosComponent]
})
export class TodosModule {}

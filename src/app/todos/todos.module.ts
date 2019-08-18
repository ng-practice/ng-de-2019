import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodoCheckerComponent } from './todo-checker/todo-checker.component';
import { TodoQuickAddComponent } from './todo-quick-add/todo-quick-add.component';
import { TodosComponent } from './todos.component';
import { TodosListComponent } from './todos-list/todos-list.component';

@NgModule({
  declarations: [TodoCheckerComponent, TodoQuickAddComponent, TodosComponent, TodosListComponent],
  imports: [CommonModule],
  exports: [TodosComponent]
})
export class TodosModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodoCheckerComponent } from './todo-checker/todo-checker.component';
import { TodoQuickAddComponent } from './todo-quick-add/todo-quick-add.component';

@NgModule({
  declarations: [TodoCheckerComponent, TodoQuickAddComponent],
  imports: [CommonModule],
  exports: [TodoCheckerComponent, TodoQuickAddComponent]
})
export class TodosModule {}

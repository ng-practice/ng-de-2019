import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodoCheckComponent } from './todo-check/todo-check.component';

@NgModule({
  declarations: [TodoCheckComponent],
  imports: [CommonModule],
  exports: [TodoCheckComponents]
})
export class TodosModule {}

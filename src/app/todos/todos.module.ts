import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodoCheckerComponent } from './todo-checker/todo-checker.component';

@NgModule({
  declarations: [TodoCheckerComponent],
  imports: [CommonModule],
  exports: [TodoCheckerComponent]
})
export class TodosModule {}

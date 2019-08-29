import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TodoCheckerComponent } from './todo-checker/todo-checker.component';
import { TodoQuickAddComponent } from './todo-quick-add/todo-quick-add.component';
import { TodosLinkNavigationComponent } from './todos-link-navigation/todos-link-navigation.component';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';

@NgModule({
  declarations: [
    TodosComponent,
    TodoQuickAddComponent,
    TodoCheckerComponent,
    TodosLinkNavigationComponent
  ],
  imports: [CommonModule, HttpClientModule, TodosRoutingModule],
  exports: [TodosComponent]
})
export class TodosModule {}

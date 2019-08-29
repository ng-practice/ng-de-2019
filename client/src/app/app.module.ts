import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodoCheckerComponent } from './todo-checker/todo-checker.component';
import { TodoQuickAddComponent } from './todo-quick-add/todo-quick-add.component';

@NgModule({
  declarations: [AppComponent, TodoCheckerComponent, TodoQuickAddComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}

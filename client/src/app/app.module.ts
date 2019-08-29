import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodoCheckerComponent } from './todo-checker/todo-checker.component';

@NgModule({
  declarations: [AppComponent, TodoCheckerComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}

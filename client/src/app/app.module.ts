import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosModule } from './todos/todos.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TodosModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  getAllTodos(): Todo[] {
    return [
      {
        text: 'Buy 🥛',
        isDone: true
      },
      {
        text: 'Plant 🌳',
        isDone: true
      },
      {
        text: 'Build 🏡',
        isDone: false
      }
    ];
  }
}

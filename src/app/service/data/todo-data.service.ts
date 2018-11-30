import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient: HttpClient) { }

  getListOfTodos(){
    return this.httpClient.get<Todo[]>("http://localhost:8080/todos");
  }

  deleteTodo(id:number){
    return this.httpClient.delete(`http://localhost:8080/todos/${id}`);
  }

  getTodoById(id:number){
    return this.httpClient.get<Todo>(`http://localhost:8080/todos/${id}`);
  }

  updateTodo(todo:Todo,id) {
    return this.httpClient.put<Todo>(`http://localhost:8080/todos/${id}`
    ,todo);
  }

  createTodo(todo:Todo) {
    return this.httpClient.post<Todo>(`http://localhost:8080/todos`
    ,todo);
  }

}

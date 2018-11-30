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
    return this.httpClient.delete<Todo>(`http://localhost:8080/delete-todo/${id}`);
  }

}

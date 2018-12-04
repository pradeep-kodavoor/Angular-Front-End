import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient: HttpClient) { }

  getListOfTodos(username:string){
    return this.httpClient.get<Todo[]>(`${API_URL}/users/${username}/todos`);
  }

  deleteTodo(username:string,id:number){
    return this.httpClient.delete(`${API_URL}/users/${username}/todos/${id}`);
  }

  getTodoById(username:string,id:number){
    return this.httpClient.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username:string,todo:Todo,id) {
    return this.httpClient.put<Todo>(`${API_URL}/users/${username}/todos/${id}`
    ,todo);
  }

  createTodo(username:string,todo:Todo) {
    return this.httpClient.post<Todo>(`${API_URL}/users/${username}/todos`
    ,todo);
  }

}

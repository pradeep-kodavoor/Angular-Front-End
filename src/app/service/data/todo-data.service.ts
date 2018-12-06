import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { TODO_JPA_URL } from 'src/app/app.constants';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient: HttpClient,private basicAuthService:BasicAuthenticationService) { }
 
  
  getListOfTodos(){
    let username = this.basicAuthService.getAuthenticatedUser();
    return this.httpClient.get<Todo[]>(`${TODO_JPA_URL}/users/${username}/todos`)
  }

  deleteTodo(id:number){
    let username = this.basicAuthService.getAuthenticatedUser();
    return this.httpClient.delete(`${TODO_JPA_URL}/users/${username}/todos/${id}`);
  }

  getTodoById(id:number){
    let username = this.basicAuthService.getAuthenticatedUser();
    return this.httpClient.get<Todo>(`${TODO_JPA_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(todo:Todo,id) {
    let username = this.basicAuthService.getAuthenticatedUser();
    return this.httpClient.put<Todo>(`${TODO_JPA_URL}/users/${username}/todos/${id}`
    ,todo);
  }

  createTodo(todo:Todo) {
    let username = this.basicAuthService.getAuthenticatedUser();
    return this.httpClient.post<Todo>(`${TODO_JPA_URL}/users/${username}/todos`
    ,todo);
  }

}

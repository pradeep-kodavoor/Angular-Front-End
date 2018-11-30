import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor (private id: number,private description: string,private targetDate:Date,private isCompleted:Boolean) {
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  constructor(
    private todoDataService:TodoDataService, 
    private router:Router) { }
  todo:Todo
  todos:Todo[]
  successMessage:string

  // todos = [
  //   new Todo(1,'Learn Core JAVA',new Date(),false),
  //   new Todo(2,'Learn J2EE' ,new Date(),false),
  //   new Todo(3,'Learn Spring' ,new Date(),false),
  //   new Todo(4,'Learn Hibernate' ,new Date(),false)
  //Below are annonymous objects
  //  {id: '1', description: 'Learn Core JAVA'},
  //  {id: '2', description: 'Learn J2EE'},
  //  {id: '3', description: 'Learn Spring'},
  //  {id: '4', description: 'Learn Hibernate'},
  //]
  
  ngOnInit() {
    this.retrieveTodos();
  }

  updateTodo(id){   
    this.router.navigate(['todo',id])
  }

  deleteTodo(id){
    this.todoDataService.deleteTodo(id).subscribe(
      response => { 
        console.log(response);
        this.successMessage = `Todo ${id} deleted successfully!`
        this.retrieveTodos();
      } 
    )    
  }


  retrieveTodos(){
    this.todoDataService.getListOfTodos().subscribe(
      response => this.todos = response
    )
  }

  createTodo(){
    this.router.navigate(['todo',-1])
  }
}
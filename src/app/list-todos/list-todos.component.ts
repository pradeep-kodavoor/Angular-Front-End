import { Component, OnInit } from '@angular/core';

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

  todos = [
    new Todo(1,'Learn Core JAVA',new Date(),false),
    new Todo(2,'Learn J2EE' ,new Date(),false),
    new Todo(3,'Learn Spring' ,new Date(),false),
    new Todo(4,'Learn Hibernate' ,new Date(),false)
    //Below are annonymous objects
    // {id: '1', description: 'Learn Core JAVA'},
    // {id: '2', description: 'Learn J2EE'},
    // {id: '3', description: 'Learn Spring'},
    // {id: '4', description: 'Learn Hibernate'},
  ]

  todo = {
    
  }

  constructor() { }

  ngOnInit() {
  }

}

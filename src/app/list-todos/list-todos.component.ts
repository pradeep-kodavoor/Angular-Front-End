import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    {id: '1', description: 'Learn Core JAVA'},
    {id: '2', description: 'Learn J2EE'},
    {id: '3', description: 'Learn Spring'},
    {id: '4', description: 'Learn Hibernate'},
  ]

  todo = {
    
  }

  constructor() { }

  ngOnInit() {
  }

}

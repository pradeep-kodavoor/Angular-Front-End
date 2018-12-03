import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(
    private todoDataService:TodoDataService, 
    private route:ActivatedRoute, 
    private router:Router) { }

  todo:Todo
  id:number

  ngOnInit() {
    //Since it is an asynhronous call to retrieve Todo, it is better to have default value initialised to todo object.
    this.todo = new Todo(this.id,'',new Date(),false)
    this.id = this.route.snapshot.params['id'];
    if (this.id != -1) {
     
      this.todoDataService.getTodoById('pradeep',this.id).subscribe(
        response => this.todo = response
      )
    }
    
  }

  saveTodo(){
    if (this.id == -1){
      this.todoDataService.createTodo('pradeep',this.todo).subscribe(
        response => {
          console.log(response)
          this.router.navigate(['todos'])
        }
      );
    } else {
      this.todoDataService.updateTodo('pradeep',this.todo,this.id).subscribe(
        response => {
          console.log(response)
          this.router.navigate(['todos'])
        }
      );  
    }
    
  }

}

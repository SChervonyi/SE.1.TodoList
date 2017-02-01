import { Component } from '@angular/core';
type TodoObj = {newTodo : string, completed: boolean};

@Component({
  selector: 'my-app',
  styleUrls: [ './app.component.css' ],
  templateUrl: './app.component.html',
})
export class AppComponent  { 
  public name: string = 'Angular'; 

  public newTodo: string = '';
  public todos: TodoObj[] = [];
  private todoObj: TodoObj;

  public addTodo(event: any): void {
    this.todoObj = {
      newTodo : this.newTodo,
      completed: false
    }
    this.todos.push(this.todoObj);
    this.newTodo = '';
    event.preventDefault();
  }
}

import { Component } from '@angular/core';
type TodoObj = {newTodo : string, completed: boolean};

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent  { 
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

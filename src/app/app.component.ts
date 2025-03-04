import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Todo-App';

  todoItems: string[] = [];
  newTodo: string = ''; //info from our client


  addTodo() {
    console.log(this.newTodo);

    if (this.newTodo) {
      this.todoItems.push(this.newTodo);
    }
     this.newTodo = '';
  }
}

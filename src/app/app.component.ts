import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Todo-App';
  todoItems = [];
  newTodo = '';  //info from our client


  addTodo() {
    console.log("todo works")
  }
}

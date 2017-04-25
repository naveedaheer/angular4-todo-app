import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service'


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  text;
  oldText;
  appState = 'default';
  constructor(private _todosService: TodosService) { }

  ngOnInit() {
    this.todos = this._todosService.getTodos();
  }

  addTodo() {
    var newTodo = {
      text: this.text
    };
    console.log("text", this.text)
    this.todos.push(newTodo);
    this._todosService.addTodo(newTodo);
  }

  deleteTodo(todoText) {
    for (var i = 0; i < this.todos.length; i++) {
      if (this.todos[i].text == todoText) {
        this.todos.splice(i, 1);
      }
    }
    this._todosService.deleteTodo(todoText);
  }

  editTodo(todo) {
    this.appState = 'edit';
    this.oldText = this.text;
    this.text = todo.text;
  }

  updateTodo() {
    for (var i = 0; i < this.todos.length; i++) {
      if (this.todos[i].text == this.oldText) {
        this.todos[i].text = this.text;
      }
    }

    this._todosService.updateTodo(this.oldText, this.text);
  }

}

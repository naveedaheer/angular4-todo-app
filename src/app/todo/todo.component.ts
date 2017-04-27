import { Component, OnInit } from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable} from 'angularfire2';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {

  items: FirebaseListObservable<any>;
  name: any;
  text: string = '';
  todoState = 'default';
  oldText;

  constructor(public af: AngularFire){
    this.items = af.database.list('/todos', {query:{limitToLast: 50}});
    this.af.auth.subscribe(auth=>{
      if(auth){
        this.name = auth;
      }
    });

  }

  ngOnInit() {
  }

  login(){
    this.af.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous
    });
  }

  saveTodo(text: string){
    this.items.push({todo: text})
    this.text = '';
  }

  editTodo(todo) {
    this.todoState = 'edit';
    this.oldText = this.text;
    this.text = todo.text;
  }

    upateTodo(postText: string){
    this.items.push({todo: postText})
    this.text = '';
  }

}

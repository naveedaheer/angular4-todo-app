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
  todoItem: string = '';

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

  save(text: string){
    this.items.push({todo: text})
    this.todoItem = '';
  }

    upateTodo(postText: string){
    this.items.push({todo: postText})
    this.todoItem = '';
  }

}

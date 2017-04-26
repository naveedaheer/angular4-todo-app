import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import {AngularFireModule} from 'angularfire2';


import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';

export const firebaseConfig = {
    apiKey: "AIzaSyD_2-Wzj0lvp6SAKCiAfyxqbK-_-Oclfx8",
    authDomain: "angular-todo-6d867.firebaseapp.com",
    databaseURL: "https://angular-todo-6d867.firebaseio.com",
    projectId: "angular-todo-6d867",
    storageBucket: "angular-todo-6d867.appspot.com",
    messagingSenderId: "931300696128"
};

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

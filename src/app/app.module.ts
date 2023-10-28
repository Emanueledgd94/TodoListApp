import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { FiltertaskComponent } from './filtertask/filtertask.component';


@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    AddtaskComponent,
    FiltertaskComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

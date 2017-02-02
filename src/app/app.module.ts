import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TodoComponent } from './components/todo/todo.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';

@NgModule({
  imports: [BrowserModule,
    FormsModule,
    HttpModule],
  declarations: [HelloWorldComponent, TodoComponent],
  bootstrap: [HelloWorldComponent, TodoComponent]
})
export class AppModule { }

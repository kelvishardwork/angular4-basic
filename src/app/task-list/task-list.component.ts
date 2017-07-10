import { Component } from '@angular/core';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  
  tasks = [];
  task = "";
  add() {
    this.tasks.push(this.task);
  }
}

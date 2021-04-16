import { Component, OnInit } from '@angular/core';

class Task {
  name: string;
  isCompleted: boolean;
  constructor(name: string) {
    this.name = name;
    this.isCompleted = false;
  }
}

@Component({
  selector: 'app-to-do-app',
  templateUrl: './to-do-app.component.html',
  styleUrls: ['./to-do-app.component.css']
})
export class ToDoAppComponent implements OnInit {

  newTask = "";
  tasks : Task[] = [];

  addTask() {
    this.tasks.push(
      new Task(this.newTask)
    );
    this.newTask = "";
  }

  constructor() { }

  ngOnInit(): void {
  }

}

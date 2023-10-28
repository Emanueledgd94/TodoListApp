import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent {
  newTask: string = ''; // Inizializza la nuova attività

  constructor(private taskService: TaskService) {}

  addTask(): void {
    if (this.newTask.trim() !== '') {
      this.taskService.addTask(this.newTask);
      this.newTask = ''; // Resetta il campo dell'input
    }
  }
}


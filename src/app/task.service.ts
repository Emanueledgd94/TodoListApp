import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: string[] = []; // Array per memorizzare le attività

  constructor() { }

  // Metodo per ottenere la lista delle attività
  getTasks(): string[] {
    return this.tasks;
  }

  // Metodo per aggiungere una nuova attività
  addTask(newTask: string): void {
    this.tasks.push(newTask);
  }

  // Metodo per aggiornare un'attività esistente
  updateTask(taskId: number, updatedTask: string): void {
    if (taskId >= 0 && taskId < this.tasks.length) {
      this.tasks[taskId] = updatedTask;
    }
  }

  // Metodo per rimuovere un'attività
  deleteTask(taskId: number): void {
    if (taskId >= 0 && taskId < this.tasks.length) {
      this.tasks.splice(taskId, 1);
    }
  }
}


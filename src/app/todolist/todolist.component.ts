import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  tasks: string[]; // Inizializza l'array nel componente
  filteredTasks: string[]; // Array per le attività filtrate
  filter: string = ''; // Testo del filtro

  constructor(private taskService: TaskService) {
    this.tasks = taskService.getTasks(); // Utilizza il servizio per ottenere le attività
    this.filteredTasks = this.tasks; // Inizializza le attività filtrate con tutte le attività
  }

  updateTask(index: number): void {
    const updatedTask = prompt('Modifica l\'attività:', this.tasks[index]);
    if (updatedTask !== null) {
      // Se l'utente ha inserito un valore e non ha cliccato su "Annulla"
      this.taskService.updateTask(index, updatedTask);
    }
  }

  deleteTask(index: number): void {
    this.taskService.deleteTask(index);
  }

  onFilterChange(newText: string): void {
    this.filter = newText;
    this.filteredTasks = this.filterTasks();
  }

  filterTasks(): string[] {
    // Implementa la logica di filtro delle attività
    return this.tasks.filter(task => task.includes(this.filter));
  }
}

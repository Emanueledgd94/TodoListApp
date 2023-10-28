// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoListApp';
  filteredTasks: string[] = [];

  tasks: string[] = [
    'Fare la spesa',
    'Studiare Angular',
    'Andare in palestra',
    'Pulire la casa'
  ];

  onFilterChange(filter: string): void {
    this.filteredTasks = this.filterTasks(filter);
  }

  filterTasks(filter: string): string[] {
    if (!filter) {
      return this.tasks;
    }
    return this.tasks.filter(task => task.toLowerCase().includes(filter.toLowerCase()));
  }
}

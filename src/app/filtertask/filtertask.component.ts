import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filtertask',
  templateUrl: './filtertask.component.html',
  styleUrls: ['./filtertask.component.css']
})
export class FiltertaskComponent {

  @Output() filterChange = new EventEmitter<string>();

  filterAll() {
    this.filterChange.emit('all');
  }

  filterCompleted() {
    this.filterChange.emit('completed');
  }

  filterNotCompleted() {
    this.filterChange.emit('notCompleted');
  }
}


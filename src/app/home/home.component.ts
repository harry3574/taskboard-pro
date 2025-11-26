import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  // --- Task Management ---
  private taskService = inject(TaskService);
  tasks$ = this.taskService.tasks$;
  newTaskTitle = '';

  addTask() {
    if (this.newTaskTitle.trim()) {
      this.taskService.addTask(this.newTaskTitle.trim());
      this.newTaskTitle = '';
    }
  }

  // --- Counting Clock ---
  count = 0;
  intervalId: any;

  ngOnInit() {
    this.startCounting();
  }

  ngOnDestroy() {
    this.stopCounting();
  }

  startCounting() {
    this.intervalId = setInterval(() => {
      this.count++;
    }, 500);
  }

  stopCounting() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      console.log('Compteur stoppé');
    }
  }
}

import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { TaskHighlightComponent } from '../component/tasks-page/task-highlight.component';
import { AfterViewInit, ViewChild, ViewContainerRef } from '@angular/core';



@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, FormsModule, TaskHighlightComponent],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit, OnDestroy {

  // --- Task Management ---
  private taskService = inject(TaskService);
  tasks$ = this.taskService.tasks$;
  newTaskTitle = '';

  addTask(title: string) {
    if (title.trim()) {
      this.taskService.addTask(title.trim());
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

  removeTask(id: number) {
  this.taskService.removeTask(id);
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

  @ViewChild('highlightContainer', { read: ViewContainerRef })
highlightContainer!: ViewContainerRef;

highlight(title: string) {
  this.highlightContainer.clear();

  const componentRef =
    this.highlightContainer.createComponent(TaskHighlightComponent);

  componentRef.instance.title = title;
}

}

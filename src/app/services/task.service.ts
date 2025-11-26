import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Task {
  id: number;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [
    { id: 1, title: 'Buy groceries' },
    { id: 2, title: 'Learn Angular routing' }
  ];

  private tasksSubject = new BehaviorSubject<Task[]>([...this.tasks]);

  tasks$: Observable<Task[]> = this.tasksSubject.asObservable();

  addTask(title: string) {
    const newTask: Task = {
      id: this.tasks.length + 1,
      title
    };
    this.tasks.push(newTask);
    this.tasksSubject.next([...this.tasks]);
  }
}

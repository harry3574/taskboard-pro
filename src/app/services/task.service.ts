import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

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
    { id: 2, title: 'Learn Angular routing' },
    { id: 3, title: 'Work on project' },
    { id: 4, title: 'Idk just go do something'}
  ];

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }
}

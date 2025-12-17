import { TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskService]
    });

    service = TestBed.inject(TaskService);

    // Reset tasks manually
    service['tasks'] = [];
    service['tasksSubject'].next([]);
  });

  it('devrait être créé', () => {
    expect(service).toBeTruthy();
  });

  it('devrait ajouter une tâche', (done) => {
    service.addTask('Apprendre les tests');

    service.tasks$.subscribe(tasks => {
      expect(tasks.length).toBe(1);
      expect(tasks[0].title).toBe('Apprendre les tests');
      done();
    });
  });

  it('devrait supprimer une tâche', (done) => {
    service.addTask('Tâche temporaire');
    let taskId: number;

    service.tasks$.subscribe(tasks => {
      if (tasks.length > 0) taskId = tasks[0].id;
    });

    service.removeTask(taskId!);

    service.tasks$.subscribe(tasks => {
      expect(tasks.length).toBe(0);
      done();
    });
  });

});

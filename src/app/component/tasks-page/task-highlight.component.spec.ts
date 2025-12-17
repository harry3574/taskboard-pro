import { TaskHighlightComponent } from './task-highlight.component';

describe('TaskHighlightComponent', () => {

  it('devrait initialiser title avec une chaîne vide', () => {
    const component = new TaskHighlightComponent();
    expect(component.title).toBe(''); // works if default is ''
  });

  it('devrait permettre de changer le titre', () => {
    const component = new TaskHighlightComponent();
    component.title = 'Tâche en avant';
    expect(component.title).toBe('Tâche en avant');
  });

});

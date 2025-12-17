import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-highlight',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="highlight">
      ⭐ Tâche mise en avant : {{ title }}
    </div>
  `,
  styles: [`
    .highlight {
      border: 2px solid gold;
      padding: 10px;
      margin-bottom: 15px;
      background: #fff9c4;
    }
  `]
})

export class TaskHighlightComponent {
  @Input() title: string = '';
}

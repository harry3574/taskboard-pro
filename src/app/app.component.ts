import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ViewChild, ViewContainerRef } from '@angular/core';
import { TaskHighlightComponent } from './component/tasks-page/task-highlight.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ]
})
export class AppComponent {}

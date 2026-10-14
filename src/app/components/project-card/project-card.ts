import { Component, input } from '@angular/core';
import { Project } from '../../models/project';

@Component({
  imports: [],
  selector: 'app-project-card',
  styleUrl: './project-card.css',
  templateUrl: './project-card.html',
})
export class ProjectCard {
  project = input.required<Project>();
}

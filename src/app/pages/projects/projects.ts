import { Component } from '@angular/core';
import { ProjectCard } from '../../components/project-card/project-card';
import { PROJECTS } from '../../data/projects';

@Component({
  imports: [ProjectCard],
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects {
  projects = PROJECTS;
}

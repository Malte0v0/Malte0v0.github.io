import { Component, computed, input } from '@angular/core';
import { PROJECTS } from '../../data/projects';
import { ProjectCard } from '../../components/project-card/project-card';
import { marked } from 'marked';

@Component({
  imports: [ProjectCard],
  selector: 'app-project-detail',
  styleUrl: './project-detail.css',
  templateUrl: './project-detail.html',
})
export class ProjectDetail {
  id = input.required<string>();
  project = computed(() => {
    const projectId: number = parseInt(this.id());
    return PROJECTS.find(p => p.id === projectId);
  });
  projectDescription = computed(() => {
    const rawDesc = this.project()?.description
    if (rawDesc) {
      return marked.parse(rawDesc, { async: false });
    }
    return undefined;
  });
}

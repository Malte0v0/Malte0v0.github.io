import { Component } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectCard } from '../../components/project-card/project-card';

@Component({
  imports: [ProjectCard],
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects {
  projects: Project[] = [
    {
      id: 1,
      name: "Chatbot",
      description: "Chatbot for the livestreaming platform Twitch",
      stack: ["Node.js", "TypeScript", "SQLite"],
    },
    {
      id: 2,
      name: "Customer Service .NET",
      description: "Port of the Customer Service written in Java",
      stack: ["ASP.NET"],
    }
  ];
}

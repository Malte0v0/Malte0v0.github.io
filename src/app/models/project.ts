export interface Project {
  id: number;
  name: string;
  repoUrl: string;
  dateStarted: Date;
  dateCompleted?: Date;
  summary: string;
  description: string;
  stack: string[];
}
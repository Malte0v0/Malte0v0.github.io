import { Routes } from '@angular/router';
import { Articles } from './pages/articles/articles';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';

export const routes: Routes = [
  { path: "**", redirectTo: "" },
  { path: "", component: Home },
  { path: "projects", component: Projects },
  { path: "articles", component: Articles },
];

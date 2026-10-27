import { Routes } from '@angular/router';
import { Articles } from './pages/articles/articles';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { ProjectDetail } from './pages/project-detail/project-detail';
import { ArticleDetail } from './pages/article-detail/article-detail';
import { PrivateHome } from './pages/private-home/private-home';

export const routes: Routes = [
  { path: "", component: Home },
  { path: "projects", component: Projects },
  { path: "projects/:id", component: ProjectDetail },
  { path: "articles", component: Articles },
  { path: "articles/:slug", component: ArticleDetail },
  { path: "private/:key", component: PrivateHome },
  { path: "**", redirectTo: "" },
];

import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Article } from '../../models/article';
import { DatePipe } from '@angular/common';

@Component({
  imports: [RouterLink, DatePipe],
  selector: 'app-article-card',
  styleUrl: './article-card.css',
  templateUrl: './article-card.html',
})
export class ArticleCard {
  article = input.required<Article>();
}

import { Component, computed, input } from '@angular/core';
import { ArticleCard } from '../../components/article-card/article-card';
import { ARTICLES } from '../../data/articles';
import { marked } from 'marked';

@Component({
  imports: [ArticleCard],
  selector: 'app-article-detail',
  styleUrl: './article-detail.css',
  templateUrl: './article-detail.html',
})
export class ArticleDetail {
  slug = input.required<string>();
  article = computed(() => ARTICLES.find(a => a.slug === this.slug()));
  articleContent = computed(() => {
    const rawContent = this.article()?.content;
    if (rawContent) {
      return marked.parse(rawContent, { async: false });
    }
    return undefined;
  });
}

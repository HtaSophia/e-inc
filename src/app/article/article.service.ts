import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TopicService } from '../topic/topic.service';
import { Article, ArticleImageAndTitle } from './article';
import { ARTICLES } from './constants/articles.constant';

@Injectable({
    providedIn: 'root',
})
export class ArticleService {
    private readonly allArticlesId = 'all';

    private articles: Article[] = ARTICLES;

    private readonly searchImageUrl = 'assets/images/article/search.jpg';

    constructor(private readonly topicService: TopicService) {}

    public getById(id: string): Observable<Article | undefined> {
        return of(this.articles.find((article) => article.id === id));
    }

    public getAllByTopicId(id = this.allArticlesId): Observable<Article[]> {
        if (id !== this.allArticlesId) {
            return of(this.articles.filter((article) => article.topicId === id));
        }

        return of(this.getAll());
    }

    public getAllByText(search: string): Observable<Article[]> {
        const articles = this.getAll();

        const articlesFiltered = articles.filter(
            (article) =>
                article.title.match(this.getSearchRegex(search)) ||
                article.htmlContent.match(this.getSearchRegex(search)),
        );

        return of(articlesFiltered);
    }

    public getImageUrlAndTitle(topicId = 'all', searchText = ''): ArticleImageAndTitle {
        if (searchText) {
            return { image: this.searchImageUrl, title: searchText };
        }

        const topic = this.topicService.getById(topicId);

        return {
            image: `assets/images/topic/${topic?.image || this.searchImageUrl}`,
            title: topic?.title || 'Sem Tópico',
        };
    }

    private getAll(): Article[] {
        return this.articles;
    }

    private getSearchRegex(text: string): RegExp {
        return new RegExp(`(?!<.?)(${text}+)(?!.?>)`, 'gi');
    }
}

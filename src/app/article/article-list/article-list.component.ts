import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article } from '../article';

@Component({
    selector: 'app-article-list',
    templateUrl: './article-list.component.html',
    styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent {
    @Input()
    public articles: Article[] = [];

    @Output()
    public onCardClick = new EventEmitter<string>();

    public onArticleCardClick(articleId: string): void {
        this.onCardClick.emit(articleId);
    }

    public trackByArticle(_index: number, article: Article): string {
        return article.id;
    }
}

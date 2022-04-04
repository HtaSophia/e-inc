import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../shared/components/search/search.service';
import { Article, ArticleParams } from './article';
import { ArticleService } from './article.service';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, OnDestroy {
    public articles: Article[] = [];

    public pageInfo = {
        title: '',
        image: '',
        hasSearch: false,
    };

    constructor(
        private readonly route: ActivatedRoute,
        private readonly router: Router,
        private readonly articleService: ArticleService,
        private readonly searchService: SearchService,
    ) {}

    public ngOnInit(): void {
        const routeData = this.route.snapshot.data as { articles: Article[] };
        const params = this.route.snapshot.queryParams as ArticleParams;
        const { searchText } = this.searchService;

        this.pageInfo = {
            ...this.articleService.getImageUrlAndTitle(params.topicId, searchText),
            hasSearch: !!searchText,
        };

        if (routeData.articles) {
            this.articles = routeData.articles;
        }
    }

    public ngOnDestroy(): void {
        this.searchService.setSearchText('');
    }

    public onArticleCardClick(articleId: string): void {
        void this.router.navigate(['article'], {
            queryParams: { id: articleId },
        });
    }
}

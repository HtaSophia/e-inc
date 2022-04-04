import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../article';

@Component({
    selector: 'app-article-details',
    templateUrl: './article-details.component.html',
    styleUrls: ['./article-details.component.scss'],
})
export class ArticleDetailsComponent implements OnInit {
    public article!: Article;

    constructor(private readonly route: ActivatedRoute) {}

    public ngOnInit(): void {
        const routeData = this.route.snapshot.data as { article: Article };

        if (routeData.article) {
            this.article = routeData.article;
        }
    }
}

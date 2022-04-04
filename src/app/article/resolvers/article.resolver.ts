import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchService } from '../../shared/components/search/search.service';
import { Article, ArticleParams } from '../article';
import { ArticleService } from '../article.service';

@Injectable({
    providedIn: 'root',
})
export class ArticleResolver implements Resolve<Article[]> {
    constructor(private readonly articleService: ArticleService, private readonly searchService: SearchService) {}

    public resolve(route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<Article[]> {
        const params: ArticleParams = route.queryParams;
        const { searchText } = this.searchService;

        if (searchText) {
            return this.articleService.getAllByText(searchText);
        }

        return this.articleService.getAllByTopicId(params.topicId);
    }
}

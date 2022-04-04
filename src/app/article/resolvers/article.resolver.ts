import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from '../article';
import { ArticleService } from '../article.service';

type ArticleParams = Params & { topicId?: string };

@Injectable({
    providedIn: 'root',
})
export class ArticleResolver implements Resolve<Article[]> {
    constructor(private readonly articleService: ArticleService) {}

    public resolve(route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<Article[]> {
        const params: ArticleParams = route.queryParams;

        const article$ = this.articleService.getAllByTopicId(params.topicId);

        return article$;
    }
}

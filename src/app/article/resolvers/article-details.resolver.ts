import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot, Params } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Injectable({
    providedIn: 'root',
})
export class ArticleDetailsResolver implements Resolve<Article | undefined> {
    constructor(private readonly articleService: ArticleService) {}

    public resolve(route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<Article | undefined> {
        const params: Params = route.queryParams;

        let article$: Observable<Article | undefined> = of();

        if (params['id']) {
            article$ = this.articleService.getById(params['id'] as string);
        }

        return article$;
    }
}

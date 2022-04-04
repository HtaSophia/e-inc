import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleDetailsResolver } from '../resolvers/article-details.resolver';
import { ArticleDetailsComponent } from './article-details.component';

const routes: Routes = [
    {
        path: '',
        component: ArticleDetailsComponent,
        resolve: { article: ArticleDetailsResolver },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ArticleDetailsRoutingModule {}

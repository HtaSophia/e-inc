import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';

@NgModule({
    declarations: [ArticleComponent, ArticleListComponent, ArticleCardComponent, ArticleDetailsComponent],
    imports: [CommonModule, ArticleRoutingModule],
})
export class ArticleModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleCardComponent } from './article-card/article-card.component';

@NgModule({
    declarations: [ArticleComponent, ArticleListComponent, ArticleCardComponent],
    imports: [CommonModule, ArticleRoutingModule],
})
export class ArticleModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArticleDetailsComponent } from './article-details.component';
import { SharedModule } from '../../shared/shared.module';
import { ArticleDetailsRoutingModule } from './article-details-routing.module';

@NgModule({
    declarations: [ArticleDetailsComponent],
    imports: [CommonModule, RouterModule, ArticleDetailsRoutingModule, SharedModule],
})
export class ArticleDetailsModule {}

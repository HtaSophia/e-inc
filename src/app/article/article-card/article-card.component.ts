import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColorService } from '../../shared/services/color.service';
import { Article } from '../article';

@Component({
    selector: 'app-article-card',
    templateUrl: './article-card.component.html',
    styleUrls: ['./article-card.component.scss'],
})
export class ArticleCardComponent implements OnInit {
    @Input()
    public article!: Article;

    @Input()
    public disabled = false;

    @Output()
    public onArticleCardClick = new EventEmitter<string>();

    public backgroundColor = '';

    constructor(private readonly colorService: ColorService) {}

    public ngOnInit(): void {
        this.backgroundColor = this.colorService.getColor();
    }

    public onCardClick(): void {
        this.onArticleCardClick.emit(this.article.id);
    }
}

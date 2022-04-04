import { Params } from '@angular/router';

export interface Article {
    id: string;
    title: string;
    htmlContent: string;
    topicId: string;
    disabled?: boolean;
}

export type ArticleParams = Params & { topicId?: string };

export interface ArticleImageAndTitle {
    image: string;
    title: string;
}

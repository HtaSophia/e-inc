import { TestBed } from '@angular/core/testing';

import { ArticleDetailsResolver } from './article-details.resolver';

describe('ArticleDetailsResolver', () => {
    let resolver: ArticleDetailsResolver;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        resolver = TestBed.inject(ArticleDetailsResolver);
    });

    it('should be created', () => {
        expect(resolver).toBeTruthy();
    });
});

import { Component, OnInit } from '@angular/core';
import { SearchService } from '../shared/components/search/search.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    constructor(private readonly searchService: SearchService) {}

    public ngOnInit(): void {
        this.searchService.setSearchText('');
    }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';
import { SearchService } from '../../shared/components/search/search.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
    private subscriptions = new SubSink();

    constructor(private readonly router: Router, private readonly searchService: SearchService) {}

    public ngOnInit(): void {
        this.subscriptions.sink = this.searchService.onTextChange().subscribe((text) => {
            if (text) {
                void this.router.navigate(['articles']);
            }
        });
    }

    public ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }
}

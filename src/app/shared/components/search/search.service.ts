import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SearchService {
    private _searchText: BehaviorSubject<string>;

    public get searchText(): string {
        return this._searchText.value;
    }

    constructor() {
        this._searchText = new BehaviorSubject<string>('');
    }

    public setSearchText(text: string): void {
        this._searchText.next(text.trim());
    }

    public onTextChange(): Observable<string> {
        return this._searchText.asObservable();
    }
}

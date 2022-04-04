import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchService } from './search.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
    public searchForm!: FormGroup;

    public placeholder = 'Informe sua busca...';

    constructor(private readonly formBuilder: FormBuilder, private readonly searchService: SearchService) {}

    public ngOnInit(): void {
        this.createForm();

        if (this.searchService.searchText) {
            this.searchForm.patchValue({ search: this.searchService.searchText });
        }

        this.searchService.onTextChange().subscribe((text) => {
            const currentText = this.searchForm.get('search')?.value as string;

            if (text !== currentText) {
                this.searchForm.patchValue({ search: text }, { emitEvent: false });
            }
        });
    }

    public onPressEnter(): void {
        const text = this.searchForm.get('search')?.value as string;
        this.searchService.setSearchText(text);
    }

    private createForm(): void {
        this.searchForm = this.formBuilder.group({
            search: [''],
        });
    }
}

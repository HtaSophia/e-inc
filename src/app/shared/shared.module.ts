import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';

@NgModule({
    declarations: [SearchComponent, SafeHtmlPipe],
    imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
    exports: [SearchComponent, SafeHtmlPipe],
})
export class SharedModule {}

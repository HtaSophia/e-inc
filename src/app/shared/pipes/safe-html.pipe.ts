import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
    name: 'safeHtml',
})
export class SafeHtmlPipe implements PipeTransform {
    constructor(protected sanitizer: DomSanitizer) {}

    public transform(value: string, ..._args: unknown[]): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
}

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ColorService {
    private colors: string[] = ['#72B2EE', '#FD6F8B', '#FFC444', '#99d5c9', '#F9DB6D'];

    private colorIndex = 0;

    public getColor(): string {
        const color = this.colors[this.colorIndex];

        this.colorIndex++;

        if (this.colorIndex >= this.colors.length) {
            this.colorIndex = 0;
        }

        return color;
    }
}

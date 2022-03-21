import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
    declarations: [HomeComponent, WelcomeComponent],
    imports: [CommonModule, RouterModule],
})
export class HomeModule {}

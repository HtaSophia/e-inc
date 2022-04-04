import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { MobileInfoComponent } from './mobile-info/mobile-info.component';

@NgModule({
    declarations: [HomeComponent, WelcomeComponent, AboutComponent, MobileInfoComponent],
    imports: [CommonModule, RouterModule],
})
export class HomeModule {}

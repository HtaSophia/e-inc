import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { NavbarComponent } from './core/navbar/navbar.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { TopicModule } from './topic/topic.module';

@NgModule({
    declarations: [AppComponent, NavbarComponent, NotFoundComponent],
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            // Register the ServiceWorker as soon as the app is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000',
        }),
        SharedModule,
        HomeModule,
        TopicModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

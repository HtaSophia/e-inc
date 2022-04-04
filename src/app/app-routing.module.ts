/* eslint-disable unicorn/no-await-expression-member */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { TopicComponent } from './topic/topic.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'topics', component: TopicComponent },
    { path: 'articles', loadChildren: async () => (await import('./article/article.module')).ArticleModule },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
/* eslint-enable unicorn/no-await-expression-member */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicComponent } from './topic.component';
import { TopicCardComponent } from './topic-card/topic-card.component';
import { TopicListComponent } from './topic-list/topic-list.component';

@NgModule({
    declarations: [TopicComponent, TopicCardComponent, TopicListComponent],
    imports: [CommonModule],
})
export class TopicModule {}

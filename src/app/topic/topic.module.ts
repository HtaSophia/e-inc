import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicComponent } from './topic.component';
import { TopicCardComponent } from './topic-card/topic-card.component';

@NgModule({
    declarations: [TopicComponent, TopicCardComponent],
    imports: [CommonModule],
})
export class TopicModule {}

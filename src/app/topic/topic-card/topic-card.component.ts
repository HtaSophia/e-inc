import { Component, Input } from '@angular/core';
import { Topic } from '../topic';

@Component({
    selector: 'app-topic-card',
    templateUrl: './topic-card.component.html',
    styleUrls: ['./topic-card.component.scss'],
})
export class TopicCardComponent {
    @Input()
    public topic!: Topic;
}

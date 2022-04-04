import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Topic } from '../topic';

@Component({
    selector: 'app-topic-list',
    templateUrl: './topic-list.component.html',
    styleUrls: ['./topic-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopicListComponent {
    @Input()
    public topics: Topic[] = [];

    @Output()
    public onCardClick = new EventEmitter<string>();

    public onTopicCardClick(topicId: string): void {
        this.onCardClick.emit(topicId);
    }

    public trackByTopic(_index: number, topic: Topic): string {
        return topic.id;
    }
}

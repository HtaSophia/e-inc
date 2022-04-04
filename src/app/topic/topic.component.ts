import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Topic } from './topic';
import { TopicService } from './topic.service';

@Component({
    selector: 'app-topic',
    templateUrl: './topic.component.html',
    styleUrls: ['./topic.component.scss'],
})
export class TopicComponent implements OnInit {
    public topics: Topic[] = [];

    constructor(private readonly router: Router, private readonly topicService: TopicService) {}

    public ngOnInit(): void {
        this.topics = this.topicService.getAll();
    }

    public onTopicCardClick(topicId: string): void {
        void this.router.navigate(['articles'], {
            queryParams: { topic: topicId },
        });
    }
}

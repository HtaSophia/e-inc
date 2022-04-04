import { Injectable } from '@angular/core';
import { TOPICS } from './constants/topics.constant';
import { Topic } from './topic';

@Injectable({
    providedIn: 'root',
})
export class TopicService {
    private topics: Topic[] = TOPICS;

    public getById(id: string): Topic | undefined {
        return this.topics.find((topic) => topic.id === id);
    }

    public getAll(): Topic[] {
        return this.topics;
    }
}

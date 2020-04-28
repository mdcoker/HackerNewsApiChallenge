import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-hacker-news',
    templateUrl: './hacker-news.component.html'
})
export class HackerNewsComponent {
    public storyIds: string[];

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        http.get<string[]>(baseUrl + 'api/HackerNews/Information').subscribe(result => {
            this.storyIds = result;
        }, error => console.error(error));
    }
}

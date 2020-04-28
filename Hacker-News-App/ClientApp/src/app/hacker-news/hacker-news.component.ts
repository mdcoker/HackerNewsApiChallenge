import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-hacker-news',
    templateUrl: './hacker-news.component.html'
})
export class HackerNewsComponent {
    public storyIds: string[];
    public currentPageIds: string[];
    public currentStart = 0;
    public pageLength = 10;

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        http.get<string[]>(baseUrl + 'api/HackerNews/Information').subscribe(result => {
            this.storyIds = result;
            this.getPage();
        }, error => console.error(error));
    }

    public nextPage() {
        if (this.currentStart + this.pageLength >= this.storyIds.length) {
            return;
        }

        this.currentStart += this.pageLength;
        this.getPage();
    }

    public prevPage() {
        if (this.currentStart == 0) {
            return;
        }

        this.currentStart -= this.pageLength;
        this.getPage();
    }

    public getPage() {
        this.currentPageIds = this.storyIds.slice(this.currentStart, this.currentStart + this.pageLength);
    }
}

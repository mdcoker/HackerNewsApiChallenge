import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-hacker-news',
    templateUrl: './hacker-news.component.html'
})
export class HackerNewsComponent {
    public returnObject: HackerNewsInformation;

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        http.get<HackerNewsInformation>(baseUrl + 'api/HackerNews/Information').subscribe(result => {
            this.returnObject = result;
        }, error => console.error(error));
    }
}

interface HackerNewsInformation {
    information: string[];
}
import { Component, Inject, Input, NgModule } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@NgModule({
    declarations: [HackerStoryComponent],
    exports: [HackerStoryComponent]
})

@Component({
    selector: 'app-hacker-story',
    templateUrl: './hacker-story.component.html'
})
export class HackerStoryComponent {
    @Input() storyId: string;
    public storyInfo: HackerStory;

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {}

    ngOnInit() {
        let callParams = new HttpParams().set("storyId", this.storyId);

        this.http.get<HackerStory>(
            this.baseUrl + 'api/HackerNews/GetStoryInfo',
            {
                params: callParams
            }
        ).subscribe(result => {
            this.storyInfo = result;
        }, error => console.error(error));
    }
    
}

interface HackerStory {
    title: string;
    by: string;
    url: string;
}
import { Component, Inject, Input, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
import { inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HackerStoryComponent } from './hacker-story.component';

describe('HackerStoryComponent', () => {
    let component: HackerStoryComponent;
    let fixture: ComponentFixture<HackerStoryComponent>;

    beforeEach((() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [HackerStoryComponent],
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HackerStoryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', inject([HackerStoryComponent], (storyComponent: HackerStoryComponent) => {
        expect(storyComponent).toBeTruthy();
    }));

})
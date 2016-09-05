import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { EventsService } from '../events/events.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'tdlt-progress',
    template: require('./progress.pug'),
    styles: [ require('./progress.scss').toString() ]
})
export class ProgressComponent implements OnInit, OnDestroy {

    public slideCount: number = 0;
    public currentSlideIndex: number = 0;

    private slideCountSubscription: Subscription;
    private slideChangeSubscription: Subscription;

    constructor(@Inject(EventsService) private eventsService: EventsService) {

    }

    ngOnInit(): void {
        this.slideChangeSubscription = this.eventsService.onSlideChanged.subscribe($event => this.currentSlideIndex = $event.newSlideIndex);
        this.slideCountSubscription = this.eventsService.onSlideCountChange.subscribe(count => this.slideCount = count);
    }

    ngOnDestroy(): void {
        this.slideChangeSubscription.unsubscribe();
        this.slideCountSubscription.unsubscribe();
    }

    get elapsedStyle() {
        if (!this.currentSlideIndex) {
            return 0;
        }
        return this.currentSlideIndex / (Math.max(0, this.slideCount - 1)) * 100;
    }

    get remainingStyle() {
        return 100 - this.elapsedStyle;
    }
}
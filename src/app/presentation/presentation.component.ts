import { Component, Input, OnInit, Inject, OnDestroy } from '@angular/core';
import { Presentation } from '../common/model/Presentation';
import { Slide } from '../common/model/Slide';
import { SlideChangeEvent } from '../common/SlideChangeEvent';
import { Direction } from '../common/Direction';
import { EventsService } from '../events/events.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'tdlt-presentation',
    template: require('./presentation.pug'),
    styles: [ require('./presentation.scss').toString() ]
})
export class PresentationComponent implements OnInit, OnDestroy {

    @Input() public presentation: Presentation;

    public previousSlide: Slide;
    public currentSlide: Slide;
    public nextSlide: Slide;

    private slideChangeSubscription: Subscription;

    constructor(@Inject(EventsService) private eventsService: EventsService) {

    }

    onSlideChange($event: SlideChangeEvent) {
        if ($event.direction === Direction.BACK) {
            this.nextSlide = this.currentSlide;
            this.currentSlide = this.previousSlide;
            this.previousSlide = this.presentation.slides[$event.newSlideIndex - 1];
        } else {
            this.previousSlide = this.currentSlide;
            this.currentSlide = this.nextSlide;
            this.nextSlide = this.presentation.slides[$event.newSlideIndex + 1];
        }
    }

    ngOnInit() {
        this.slideChangeSubscription = this.eventsService.onSlideChanged.subscribe($event => this.onSlideChange($event));
        this.currentSlide = this.presentation.slides[0];
        this.nextSlide = this.presentation.slides[1];
    }

    ngOnDestroy(): void {
        this.slideChangeSubscription.unsubscribe();
    }
}
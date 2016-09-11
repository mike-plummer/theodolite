import { Component, Input, OnInit, Inject, OnDestroy, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { Presentation } from '../common/model/Presentation';
import { Slide } from '../common/model/Slide';
import { SlideChangeEvent } from '../common/SlideChangeEvent';
import { Direction } from '../common/Direction';
import { EventsService } from '../events/events.service';
import { Subscription } from 'rxjs';
import { SlideComponent } from '../slide/slide.component';
import isNil = require('lodash/isNil');

@Component({
    selector: 'tdlt-presentation',
    template: require('./presentation.pug'),
    styles: [ require('./presentation.scss').toString() ]
})
export class PresentationComponent implements OnInit, OnDestroy {

    @Input() public presentation: Presentation;

    public currentSlide: Slide;
    public nextSlide: Slide;

    @ViewChildren(SlideComponent) slideComponents: QueryList<SlideComponent>;

    private slideChangeSubscription: Subscription;

    constructor(@Inject(EventsService) private eventsService: EventsService) {

    }

    onSlideChange($event: SlideChangeEvent) {
        this.nextSlide = this.presentation.slides[ $event.newSlideIndex ];

        if (this.slideComponents) {
            this.slideComponents.toArray()[ 0 ].exit($event.direction);
            this.slideComponents.toArray()[ 1 ].enter($event.direction);
        }
    }

    ngOnInit() {
        this.slideChangeSubscription = this.eventsService.onSlideChanged.subscribe($event => this.onSlideChange($event));
        this.currentSlide = this.presentation.slides[0];
    }

    ngOnDestroy(): void {
        this.slideChangeSubscription.unsubscribe();
    }

    onAnimationEnd(id: number) {
        if (!isNil(this.nextSlide)) {
            this.currentSlide = this.nextSlide;
            this.nextSlide = null;
        }
    }
}
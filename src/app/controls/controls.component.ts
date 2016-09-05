import { Component, HostListener, style, state, animate, transition, trigger, Inject, Input } from '@angular/core';
import { KEYCODES } from '../common/keycodes';
import { Direction } from '../common/Direction';
import { SlideChangeEvent } from '../common/SlideChangeEvent';
import { EventsService } from '../events/events.service';
import { Subscription } from 'rxjs';
import { Presentation } from '../common/model/Presentation';

@Component({
    selector: 'tdlt-controls',
    template: require('./controls.pug'),
    styles: [ require('./controls.scss').toString() ],
    animations: [
        trigger('slideUpDown', [
            state('in', style({transform: 'translateX(0)'})),
            transition('void => *', [
                style({transform: 'translateY(100%)'}),
                animate(200, style({transform: 'translateY(0)'})),
            ]),
            transition('* => void', [
                animate(200, style({transform: 'translateY(100%)'}))
            ])
        ])
    ]
})
export class ControlsComponent {

    public displayed: boolean = false;
    public currentSlideIndex: number = 0;
    @Input() public presentation: Presentation;

    private slideCountSubscription: Subscription;

    constructor(@Inject(EventsService) private eventsService: EventsService) {

    }

    @HostListener('document:keydown', [ '$event' ]) onKey($event: KeyboardEvent) {
        if ($event.keyCode == KEYCODES.SPACE) {
            this.displayed = !this.displayed;
            return false;
        } else if ($event.keyCode == KEYCODES.LEFT) {
            this.goBackward();
        } else if ($event.keyCode == KEYCODES.RIGHT && this.canGoForward()) {
            this.goForward();
        }

        return true;
    }

    goStart() {
        this.eventsService.slideChanged.next(new SlideChangeEvent(Direction.BACK, this.currentSlideIndex = 0));
    }

    goBackward() {
        if (this.canGoBackward()) {
            this.eventsService.slideChanged.next(new SlideChangeEvent(Direction.BACK, --this.currentSlideIndex));
        }
    }

    goForward() {
        if (this.canGoForward()) {
            this.eventsService.slideChanged.next(new SlideChangeEvent(Direction.FORWARD, ++this.currentSlideIndex));
        }
    }

    goEnd() {
        this.eventsService.slideChanged.next(new SlideChangeEvent(Direction.FORWARD, this.currentSlideIndex = this.presentation.slides.length - 1));
    }

    canGoBackward() {
        return this.currentSlideIndex > 0;
    }

    canGoForward() {
        return this.currentSlideIndex < (this.presentation.slides.length - 1);
    }
}
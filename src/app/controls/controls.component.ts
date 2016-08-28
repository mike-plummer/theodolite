import {
    Component,
    Input,
    HostListener,
    Output,
    EventEmitter,
    style,
    state,
    animate,
    transition,
    trigger
} from '@angular/core';
import { KEYCODES } from '../common/keycodes';
import { DefaultValuePipe } from '../common/default.pipe';
import { Presentation } from '../common/model/Presentation';

@Component({
    selector: 'tdlt-controls',
    template: require('./controls.pug'),
    directives: [],
    pipes: [ DefaultValuePipe ],
    styles: [ require('./controls.scss').toString() ],
    providers: [],
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

    @Output() public slideChange: EventEmitter<number> = new EventEmitter<number>();
    @Input() public presentation: Presentation;
    public displayed: boolean = false;
    public currentSlideIndex: number = 0;

    constructor() {

    }

    @HostListener('document:keydown', [ '$event' ]) onKey($event: KeyboardEvent) {
        if ($event.keyCode == KEYCODES.SPACE) {
            this.displayed = !this.displayed;
            return false;
        } else if ($event.keyCode == KEYCODES.LEFT && this.canGoBackward()) {
            this.goBackward();
        } else if ($event.keyCode == KEYCODES.RIGHT && this.canGoForward()) {
            this.goForward();
        }

        return true;
    }

    goStart() {
        this.slideChange.emit(this.currentSlideIndex = 0);
    }

    goBackward() {
        this.slideChange.emit(--this.currentSlideIndex);
    }

    goForward() {
        this.slideChange.emit(++this.currentSlideIndex);
    }

    goEnd() {
        this.slideChange.emit(this.currentSlideIndex = this.presentation.slides.length - 1);
    }

    onPresentationLoad() {
        this.goStart();
    }

    canGoBackward() {
        return this.currentSlideIndex > 0;
    }

    canGoForward() {
        return this.currentSlideIndex < (this.presentation.slides.length - 1);
    }
}
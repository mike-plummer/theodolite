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
import { Presentation } from '../model/Presentation';
import { KEYCODES } from '../util/keycodes';

@Component({
    selector: 'tdlt-controls',
    template: require('./controls.pug'),
    directives: [],
    pipes: [],
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

    @Output() public backward: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() public forward: EventEmitter<boolean> = new EventEmitter<boolean>();

    @Input() public presentation: Presentation;
    public displayed: boolean = false;

    constructor() {

    }

    @HostListener('document:keydown', [ '$event' ]) onKey($event: KeyboardEvent) {
        if ($event.keyCode == KEYCODES.SPACE) {
            this.displayed = !this.displayed;
            return false;
        } else if ($event.keyCode == KEYCODES.LEFT) {
            this.goBackward();
        } else if ($event.keyCode == KEYCODES.RIGHT) {
            this.goForward();
        }

        return true;
    }

    goBackward() {
        this.backward.emit(true);
    }

    goForward() {
        this.forward.emit(true);
    }
}
import { Component, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { Presentation } from '../model/Presentation';
import { KEYCODES } from '../util/keycodes';

@Component({
    selector: 'tdlt-controls',
    template: require('./controls.pug'),
    directives: [],
    pipes: [],
    styles: [require('./controls.scss').toString()],
    providers: []
})
export class ControlsComponent {

    @Output() public reverse: EventEmitter<boolean> = new EventEmitter<boolean>();
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
            this.reverse.emit(true);
        } else if ($event.keyCode == KEYCODES.RIGHT) {
            this.forward.emit(true);
        }

        return true;
    }
}
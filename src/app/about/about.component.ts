import { Component, HostListener, ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { KEYCODES } from '../common/keycodes';

@Component({
    selector: 'tdlt-about',
    template: require('./about.pug'),
    directives: [ ModalComponent ],
    pipes: [],
    styles: [ require('./about.scss').toString() ],
    providers: []
})
export class AboutComponent {

    @ViewChild(ModalComponent) private modal: ModalComponent;

    public title: string = 'About';
    public content: string = require('./about-modal.pug');

    constructor() {
    }

    @HostListener('document:keydown', [ '$event' ]) onKey($event: KeyboardEvent) {
        if ($event.keyCode == KEYCODES.A) {
            this.modal.open();
        }

        return true;
    }
}
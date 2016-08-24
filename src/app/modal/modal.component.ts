import { Component, Input } from '@angular/core';

@Component({
    selector: 'tdlt-modal',
    template: require('./modal.pug'),
    directives: [],
    pipes: [],
    styles: [ require('./modal.scss').toString() ],
    providers: []
})
export class ModalComponent {

    @Input() public title: string;
    @Input() public content: string;

    public active: boolean = false;

    constructor() {
    }

    open() {
        this.active = true;
    }

    close() {
        this.active = false;
    }
}
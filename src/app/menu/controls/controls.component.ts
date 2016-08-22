import { Component } from '@angular/core';

@Component({
    selector: 'tdlt-controls',
    template: require('./controls.pug'),
    directives: [],
    pipes: [],
    styles: [require('./controls.scss').toString()],
    providers: []
})
export class ControlsComponent {

    public displayed: boolean = false;

    constructor() {

    }

    onClick() {
        this.displayed = !this.displayed;
    }
}
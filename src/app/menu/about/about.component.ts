import { Component } from '@angular/core';

@Component({
    selector: 'tdlt-about',
    template: require('./about.pug'),
    directives: [],
    pipes: [],
    styles: [require('./about.scss').toString()],
    providers: []
})
export class AboutComponent {

    public displayed: boolean = false;

    constructor() {

    }

    onClick() {
        this.displayed = !this.displayed;
    }
}
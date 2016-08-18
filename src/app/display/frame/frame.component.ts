import { Component } from '@angular/core';

@Component({
    selector: 'frame',
    template: require('./frame.pug'),
    directives: [],
    pipes: [],
    styles: [require('./frame.scss').toString()],
    providers: []
})
export default class FrameComponent {
    public displayTemplate: String;

    constructor() {

    }
}
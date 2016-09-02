import { Component, Input } from '@angular/core';
import { Slide } from '../common/model/Slide';

@Component({
    selector: 'tdlt-slide',
    template: require('./slide.pug'),
    styles: [ require('./slide.scss').toString() ]
})
export class SlideComponent {

    @Input() public slide: Slide;

    constructor() {

    }
}
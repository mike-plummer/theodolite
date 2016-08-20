import {Component} from '@angular/core';
import Slide from '../../model/Slide';

@Component({
    selector: 'tdlt-code-slide',
    template: require('./codeSlide.pug'),
    directives: [],
    pipes: [],
    styles: [require('./codeSlide.scss').toString()],
    providers: []
})
export default class CodeSlideComponent {

    constructor(private slide: Slide) {

    }
}
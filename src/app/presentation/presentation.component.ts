import {Component, Input} from '@angular/core';
import Presentation from '../model/Presentation';
import MarkdownSlideComponent from '../slide/markdown/markdownSlide.component';
import CodeSlideComponent from '../slide/code/codeSlide.component';

@Component({
    selector: 'tdlt-presentation',
    template: require('./presentation.pug'),
    directives: [MarkdownSlideComponent, CodeSlideComponent],
    pipes: [],
    styles: [require('./presentation.scss').toString()],
    providers: []
})
export default class PresentationComponent {

    @Input() public presentation: Presentation;

    constructor() {

    }
}
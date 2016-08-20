import {Component, Inject} from '@angular/core';
import MarkdownService from '../../markdown/markdown.service';
import Slide from '../../model/Slide';

@Component({
    selector: 'tdlt-markdown-slide',
    template: require('./markdownSlide.pug'),
    directives: [],
    pipes: [],
    styles: [require('./markdownSlide.scss').toString()],
    providers: []
})
export default class MarkdownSlideComponent {

    constructor(private slide: Slide,
                @Inject(MarkdownService) markdownService: MarkdownService) {

    }
}
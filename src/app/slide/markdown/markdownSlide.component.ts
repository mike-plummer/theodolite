import { Component, Inject, Input, SimpleChange, OnChanges } from '@angular/core';
import { MarkdownService } from '../../markdown/markdown.service';
import { Slide } from '../../model/Slide';

@Component({
    selector: 'tdlt-markdown-slide',
    template: require('./markdownSlide.pug'),
    directives: [],
    pipes: [],
    styles: [ require('./markdownSlide.scss').toString() ],
    providers: []
})
export class MarkdownSlideComponent implements OnChanges {

    @Input() public slide: Slide;
    public content: string;

    constructor(@Inject(MarkdownService) private markdownService: MarkdownService) {
    }

    ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
        if (changes[ 'slide' ]) {
            this.content = this.markdownService.parse(this.slide.content);
        }
    }
}
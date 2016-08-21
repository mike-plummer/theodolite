import { Component, Inject, Input, OnInit } from '@angular/core';
import { MarkdownService } from '../../markdown/markdown.service';
import { Slide } from '../../model/Slide';

@Component({
    selector: 'tdlt-markdown-slide',
    template: require('./markdownSlide.pug'),
    directives: [],
    pipes: [],
    styles: [require('./markdownSlide.scss').toString()],
    providers: []
})
export class MarkdownSlideComponent implements OnInit {

    @Input() public slide: Slide;
    public content: string;

    constructor(@Inject(MarkdownService) private markdownService: MarkdownService) {
    }

    ngOnInit(): void {
        this.content = this.markdownService.parse(this.slide.content);
    }
}
import { Component, Inject, Input, SimpleChange, OnChanges } from '@angular/core';
import { MarkdownService } from '../../markdown/markdown.service';
import { Slide } from '../../common/model/Slide';
import { DomSanitizationService, SafeHtml } from '@angular/platform-browser';

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
    public content: SafeHtml;

    constructor(@Inject(DomSanitizationService) private domSanitizationService: DomSanitizationService,
                @Inject(MarkdownService) private markdownService: MarkdownService) {
    }

    ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
        if (changes[ 'slide' ]) {
            if (this.slide && this.slide.content) {
                let markdownContent = this.markdownService.parse(this.slide.content);
                this.content = this.domSanitizationService.bypassSecurityTrustHtml(markdownContent);
            } else {
                this.content = null;
            }
        }
    }
}
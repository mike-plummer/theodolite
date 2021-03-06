import { Component, Inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MarkdownService } from '../../markdown/markdown.service';
import { Slide } from '../../common/model/Slide';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'tdlt-markdown-slide',
    template: require('./markdownSlide.pug'),
    styles: [ require('./markdownSlide.scss').toString(),
              require('prismjs/themes/prism.css').toString() ]
})
export class MarkdownSlideComponent implements OnChanges {

    @Input() public slide: Slide;
    public content: SafeHtml;

    constructor(@Inject(DomSanitizer) private domSanitizer: DomSanitizer,
                @Inject(MarkdownService) private markdownService: MarkdownService) {

    }

    ngOnChanges(changes: SimpleChanges) {
        let slideChange = changes[ 'slide' ];
        if (slideChange) {
            if (slideChange.currentValue) {
                let fileContent = require(`!!raw!content/${slideChange.currentValue.contentFile}`);
                let markdownContent = this.markdownService.parse(fileContent);
                this.content = this.domSanitizer.bypassSecurityTrustHtml(markdownContent);
            } else {
                this.content = null;
            }
        }
    }
}
import { Component, Input, OnChanges, SimpleChanges, Inject } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { HighlightService } from '../../highlight/highlight.service';
import { CodeSlide } from '../../common/model/CodeSlide';

@Component({
    selector: 'tdlt-code-slide',
    template: require('./codeSlide.pug'),
    styles: [ require('./codeSlide.scss').toString(),
              require('prismjs/themes/prism.css').toString() ]
})
export class CodeSlideComponent implements OnChanges {

    @Input() public slide: CodeSlide;
    public content: SafeHtml;

    constructor(@Inject(DomSanitizer) private domSanitizer: DomSanitizer,
                @Inject(HighlightService) private highlightService: HighlightService) {

    }

    ngOnChanges(changes: SimpleChanges) {
        let slideChange = changes['slide'];
        if (slideChange) {
            let rawCode = require(`!!raw!content/${slideChange.currentValue.contentFile}`);
            let htmlContent = this.highlightService.highlight(rawCode, this.slide.language);

            this.content = this.domSanitizer.bypassSecurityTrustHtml(htmlContent);
        }
    }
}
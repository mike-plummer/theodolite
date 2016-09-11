import { Component, Input, OnChanges, SimpleChanges, Inject } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { HighlightService } from '../../highlight/highlight.service';
import { CodeSlide } from '../../common/model/CodeSlide';
import { range } from 'lodash';

const newlinePattern = /\n(?!$)/g;

@Component({
    selector: 'tdlt-code-slide',
    template: require('./codeSlide.pug'),
    styles: [ require('./codeSlide.scss').toString(),
              require('prismjs/themes/prism.css').toString() ]
})
export class CodeSlideComponent implements OnChanges {

    @Input() public slide: CodeSlide;
    public content: SafeHtml;
    public lineNumbers: number[];

    constructor(@Inject(DomSanitizer) private domSanitizer: DomSanitizer,
                @Inject(HighlightService) private highlightService: HighlightService) {

    }

    ngOnChanges(changes: SimpleChanges) {
        let slideChange = changes['slide'];
        if (slideChange) {
            let rawCode: string = require(`!!raw!content/${slideChange.currentValue.contentFile}`);

            this.lineNumbers = range(1, rawCode.match(newlinePattern).length + 2);

            let htmlContent = this.highlightService.highlight(rawCode, this.slide.language);

            this.content = this.domSanitizer.bypassSecurityTrustHtml(htmlContent);
        }
    }

    isLineInactive(line: number) {
        if (this.slide.highlightLines && this.slide.highlightLines.length > 0) {
            return !this.slide.highlightLines.includes(line);
        }
        return false;
    }
}
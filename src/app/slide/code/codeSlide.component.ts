import { Component, Input, OnChanges, SimpleChanges, ElementRef, ViewChild, Inject } from '@angular/core';
import { Slide } from '../../common/model/Slide';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

const Highlight = require('highlight.js');

@Component({
    selector: 'tdlt-code-slide',
    template: require('./codeSlide.pug'),
    styles: [ require('./codeSlide.scss').toString() ]
})
export class CodeSlideComponent implements OnChanges {

    @Input() public slide: Slide;
    public content: SafeHtml;

    constructor(@Inject(DomSanitizer) private domSanitizer: DomSanitizer) {

    }

    ngOnChanges(changes: SimpleChanges) {
        let slideChange = changes['slide'];
        if (slideChange) {
            let rawCode = require(`raw!./../../../../content/${slideChange.currentValue.contentFile}`);

            let htmlContent;
            if (this.slide.language) {
                htmlContent = Highlight.highlightAuto(rawCode, [ this.slide.language ]);
            } else {
                htmlContent = Highlight.highlightAuto(rawCode)
            }

            this.content = this.domSanitizer.bypassSecurityTrustHtml(htmlContent.value);
        }
    }
}
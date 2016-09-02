import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Slide } from '../../common/model/Slide';

const Highlight = require('highlight.js');

@Component({
    selector: 'tdlt-code-slide',
    template: require('./codeSlide.pug'),
    styles: [ require('./codeSlide.scss').toString() ]
})
export class CodeSlideComponent implements OnInit, OnChanges {

    @Input() public slide: Slide;
    public content: string;

    constructor() {
        console.log('code slide!');
    }

    ngOnInit(): void {
        Highlight.initHighlighting();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes[ 'slide' ]) {
            if (this.slide) {
                this.content = require(`raw!./../../../../content/${this.slide.contentFile}`);
            } else {
                this.content = null;
            }
        }
    }
}
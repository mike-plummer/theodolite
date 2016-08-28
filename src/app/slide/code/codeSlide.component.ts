import { Component, Input, OnInit } from '@angular/core';
import { Slide } from '../../common/model/Slide';

@Component({
    selector: 'tdlt-code-slide',
    template: require('./codeSlide.pug'),
    directives: [],
    pipes: [],
    styles: [ require('./codeSlide.scss').toString() ],
    providers: []
})
export class CodeSlideComponent implements OnInit {

    @Input() public slide: Slide;

    public content: string;

    constructor() {

    }

    ngOnInit(): void {
        // TODO: Add code highlighting
        this.content = this.slide.content
    }
}
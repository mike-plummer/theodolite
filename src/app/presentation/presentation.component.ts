import { Component, Input } from '@angular/core';
import { Presentation } from '../model/Presentation';
import { MarkdownSlideComponent } from '../slide/markdown/markdownSlide.component';
import { CodeSlideComponent } from '../slide/code/codeSlide.component';
import { ControlsComponent } from '../controls/controls.component';

@Component({
    selector: 'tdlt-presentation',
    template: require('./presentation.pug'),
    directives: [ ControlsComponent, MarkdownSlideComponent, CodeSlideComponent ],
    pipes: [],
    styles: [ require('./presentation.scss').toString() ],
    providers: []
})
export class PresentationComponent {

    @Input() public presentation: Presentation;
    public activeSlide: number = 0;

    constructor() {

    }

    reverse() {
        if (this.activeSlide > 0) {
            this.activeSlide -= 1;
        }
    }

    forward() {
        if (this.activeSlide < (this.presentation.slides.length - 1)) {
            this.activeSlide += 1;
        }
    }
}
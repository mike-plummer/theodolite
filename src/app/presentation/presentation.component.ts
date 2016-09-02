import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Presentation } from '../common/model/Presentation';
import { MarkdownSlideComponent } from '../slide/markdown/markdownSlide.component';
import { CodeSlideComponent } from '../slide/code/codeSlide.component';
import { ControlsComponent } from '../controls/controls.component';
import { Slide } from '../common/model/Slide';
import { SlideChangeEvent } from '../common/SlideChangeEvent';
import { Direction } from '../common/Direction';

@Component({
    selector: 'tdlt-presentation',
    template: require('./presentation.pug'),
    styles: [ require('./presentation.scss').toString() ]
})
export class PresentationComponent implements OnInit {

    @ViewChild(ControlsComponent) private controls: ControlsComponent;

    @Input() public presentation: Presentation;

    public previousSlide: Slide;
    public currentSlide: Slide;
    public nextSlide: Slide;

    constructor() {

    }

    onSlideChange($event: SlideChangeEvent) {
        if ($event.direction === Direction.BACK) {
            this.nextSlide = this.currentSlide;
            this.currentSlide = this.previousSlide;
            this.previousSlide = this.presentation.slides[$event.newSlideIndex - 1];
        } else {
            this.previousSlide = this.currentSlide;
            this.currentSlide = this.nextSlide;
            this.nextSlide = this.presentation.slides[$event.newSlideIndex + 1];
        }
    }

    ngOnInit() {
        this.currentSlide = this.presentation.slides[0];
        this.nextSlide = this.presentation.slides[1];
    }
}
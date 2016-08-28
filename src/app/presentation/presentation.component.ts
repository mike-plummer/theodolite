import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Presentation } from '../common/model/Presentation';
import { MarkdownSlideComponent } from '../slide/markdown/markdownSlide.component';
import { CodeSlideComponent } from '../slide/code/codeSlide.component';
import { ControlsComponent } from '../controls/controls.component';
import { Slide } from '../common/model/Slide';

@Component({
    selector: 'tdlt-presentation',
    template: require('./presentation.pug'),
    directives: [ ControlsComponent, MarkdownSlideComponent, CodeSlideComponent ],
    pipes: [],
    styles: [ require('./presentation.scss').toString() ],
    providers: []
})
export class PresentationComponent implements OnInit {

    @ViewChild(ControlsComponent) private controls: ControlsComponent;

    @Input() public presentation: Presentation;

    public currentSlide: Slide;

    constructor() {

    }

    onSlideChange(newSlide: number) {
        this.currentSlide = this.presentation.slides[newSlide];
    }

    ngOnInit() {
        this.controls.onPresentationLoad();
    }
}
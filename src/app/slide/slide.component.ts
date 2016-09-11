import { Component, Input, HostListener } from '@angular/core';
import { Slide } from '../common/model/Slide';
import { SlideType } from '../common/model/SlideType';
import { Direction } from '../common/Direction';

@Component({
    selector: 'tdlt-slide',
    template: require('./slide.pug'),
    styles: [ require('./slide.scss').toString(),
              require('animate.css/animate.css').toString()]
})
export class SlideComponent {

    public slideType = SlideType;

    @Input() public slide: Slide;

    public animation: string;
    public offLeft: boolean;
    public offRight: boolean;

    constructor() {

    }

    enter(direction: Direction) {
        this.animation = null;
        if (direction === Direction.BACK) {
            this.animation = 'slideInLeft animated';
        } else {
            this.animation = 'slideInRight animated';
        }
    }

    exit(direction: Direction) {
        this.animation = null;
        if (direction === Direction.BACK) {
            this.animation = 'slideOutRight animated';
        } else {
            this.animation = 'slideOutLeft animated';
        }
    }

    @HostListener('animationend') onAnimationEnd() {
        this.animation = null;
    }
}
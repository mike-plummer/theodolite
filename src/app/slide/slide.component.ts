import { Component, Input, HostListener } from '@angular/core';
import { Slide } from '../common/model/Slide';
import { SlideType } from '../common/model/SlideType';
import { Direction } from '../common/Direction';
import { TransitionType, entranceAnimation, exitAnimation } from '../common/model/TransitionType';

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

    constructor() {

    }

    enter(direction: Direction, slide: Slide): void {
        this.animation = entranceAnimation(slide.transition, direction);
    }

    exit(direction: Direction): void {
        this.animation = exitAnimation();
    }

    @HostListener('animationend') onAnimationEnd(): void {
        this.animation = null;
    }
}
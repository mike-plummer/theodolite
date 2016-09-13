import { Component, Input, HostListener } from '@angular/core';
import { Slide } from '../common/model/Slide';
import { SlideType } from '../common/model/SlideType';
import { Direction } from '../common/Direction';
import { isNil, toLower } from 'lodash';
import { AnimationType } from '../common/model/AnimationType';

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
        this.animation = this.buildAnimationClass(true, slide.entranceAnimation, direction);
    }

    exit(direction: Direction): void {
        this.animation = this.buildAnimationClass(false, this.slide.exitAnimation, direction);
    }

    @HostListener('animationend') onAnimationEnd(): void {
        this.animation = null;
    }

    private buildAnimationClass(entrance: boolean, animationType: AnimationType, direction: Direction): string {
        if (isNil(animationType)) {
            animationType = AnimationType.SLIDE;
        }

        let animationString = SlideComponent.convertAnimationToString(animationType);
        let directionString;
        if (entrance) {
            directionString = direction === Direction.BACK ? 'Left' : 'Right';
        } else {
            directionString = direction === Direction.BACK ? 'Right' : 'Left';
        }
        let inOrOut = entrance ? 'In' : 'Out';
        return `${animationString + inOrOut + directionString} animated`;
    }

    private static convertAnimationToString(animationType: AnimationType): string {
        let result;
        if (animationType instanceof String) {
            result = <string> animationType;
        } else {
            result = AnimationType[ animationType ];
        }
        return toLower(result);
    }
}
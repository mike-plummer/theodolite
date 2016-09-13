import {Direction} from '../Direction';
import { isNil, toLower } from 'lodash';

export enum TransitionType {
    BOUNCE = <any> "BOUNCE",
    SLIDE = <any> "SLIDE",
    FADE = <any> "FADE",
    LIGHTSPEED = <any> "LIGHTSPEED",
    ROLL = <any> "ROLL",
    ROTATE = <any> "ROTATE",
    ZOOM = <any> "ZOOM"
}

export function entranceAnimation(transition: TransitionType = TransitionType.SLIDE, direction: Direction) {
    if (isNil(transition)) {
        transition = TransitionType.SLIDE;
    }

    let animationString = toLower(TransitionType[transition]);
    let directionString = direction === Direction.BACK ? 'Left' : 'Right';
    return `${animationString}In${directionString} animated`;
}

export function exitAnimation(transition: TransitionType = TransitionType.FADE): string {
    let animationString = toLower(TransitionType[transition]);
    return `${animationString}Out animated`;
}
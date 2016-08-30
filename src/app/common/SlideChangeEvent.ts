import { Direction } from './Direction';

export class SlideChangeEvent {
    constructor(public direction: Direction,
                public newSlideIndex: number) {

    }
}
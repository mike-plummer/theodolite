import { SlideType } from './SlideType';
import { Slide } from './Slide';
import { AnimationType } from './AnimationType';

export class CodeSlide extends Slide {

    constructor(contentFile: string,
                entranceAnimation: AnimationType,
                exitAnimation: AnimationType,
                public language: string,
                public title: string,
                public showLineNumbers: boolean,
                public highlightLines: number[]) {
        super(contentFile, SlideType.CODE, entranceAnimation, exitAnimation);
    }
}

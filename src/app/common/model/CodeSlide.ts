import { SlideType } from './SlideType';
import { Slide } from './Slide';
import { TransitionType } from './TransitionType';

export class CodeSlide extends Slide {

    constructor(contentFile: string,
                transition: TransitionType,
                public language: string,
                public title: string,
                public showLineNumbers: boolean,
                public highlightLines: number[]) {
        super(contentFile, SlideType.CODE, transition);
    }
}

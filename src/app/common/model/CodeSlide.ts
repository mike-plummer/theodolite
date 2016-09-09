import { SlideType } from './SlideType';
import { Slide } from './Slide';

export class CodeSlide extends Slide {

    constructor(contentFile: string,
                public language: string,
                public title: string) {
        super(contentFile, SlideType.CODE);
    }
}

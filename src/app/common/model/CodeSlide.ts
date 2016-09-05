import { SlideType } from './SlideType';
import { Slide } from './Slide';

export class CodeSlide extends Slide {

    constructor(contentFile: string,
                type: SlideType,
                style: string,
                public language: string) {
        super(contentFile, type, style);
    }
}

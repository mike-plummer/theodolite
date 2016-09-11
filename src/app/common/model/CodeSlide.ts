import { SlideType } from './SlideType';
import { Slide } from './Slide';

export class CodeSlide extends Slide {

    constructor(contentFile: string,
                public language: string,
                public title: string,
                public showLineNumbers: boolean,
                public highlightLines: number[]) {
        super(contentFile, SlideType.CODE);
    }
}

import {SlideType} from './SlideType';

abstract class Slide {
    public id: string;
    public styles: Array<string>;

    // TS 2.0 supports abstract 'getter' functions, convert when possible
    abstract getSlideType(): SlideType;
}

export default Slide;
import Slide from './Slide'
import {SlideType} from './SlideType';

export default class CodeSlide extends Slide {
    public content: string;

    getSlideType(): SlideType {
        return SlideType.CODE;
    }
}
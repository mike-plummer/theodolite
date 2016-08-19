import Slide from './Slide'
import {SlideType} from './SlideType';

export default class CustomSlide extends Slide {
    public content: string;

    getSlideType(): SlideType {
        return SlideType.CUSTOM;
    }
}
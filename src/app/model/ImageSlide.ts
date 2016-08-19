import Slide from './Slide'
import {SlideType} from './SlideType';

export default class ImageSlide extends Slide {
    public source: string;

    getSlideType(): SlideType {
        return SlideType.IMAGE;
    }
}
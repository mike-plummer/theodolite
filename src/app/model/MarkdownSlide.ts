import Slide from './Slide'
import {SlideType} from './SlideType';

export default class MarkdownSlide extends Slide {
    public content: string;

    getSlideType(): SlideType {
        return SlideType.MARKDOWN;
    }
}
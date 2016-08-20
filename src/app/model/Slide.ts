import {uniqueId} from 'lodash';
import {SlideType} from './SlideType';

export default class Slide {
    public id: string;
    public content: string;
    public slideType: SlideType;

    constructor() {
        this.id = uniqueId();
    }
}

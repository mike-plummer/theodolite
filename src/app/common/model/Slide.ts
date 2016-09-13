import { uniqueId } from 'lodash';
import { SlideType } from './SlideType';
import { AnimationType } from './AnimationType';

export class Slide {

    constructor(public contentFile: string,
                public type: SlideType,
                public entranceAnimation: AnimationType,
                public exitAnimation: AnimationType,
                public id: string = uniqueId()) {
    }
}

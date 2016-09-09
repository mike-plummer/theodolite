import { uniqueId } from 'lodash';
import { SlideType } from './SlideType';

export class Slide {

    constructor(public contentFile: string,
                public type: SlideType,
                public id: string = uniqueId()) {
    }
}

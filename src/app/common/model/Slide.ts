import { uniqueId } from 'lodash';
import { SlideType } from './SlideType';
import { TransitionType } from './TransitionType';

export class Slide {

    constructor(public contentFile: string,
                public type: SlideType,
                public transition: TransitionType,
                public id: string = uniqueId()) {
    }
}

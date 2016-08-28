import { uniqueId } from 'lodash';
import { SlideType } from './SlideType';

export class Slide {
    constructor(public content: string,
                public type: SlideType,
                public id: string = uniqueId()) {
    }

    set contentFile(filename) {
        this.content = require(`raw!./../../../../content/${filename}`).toString();
    }
}

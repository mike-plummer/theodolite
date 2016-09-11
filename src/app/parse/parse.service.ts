import { Presentation } from '../common/model/Presentation';
import { Injectable } from '@angular/core';
import { Slide } from '../common/model/Slide';
import { CodeSlide } from '../common/model/CodeSlide';
import {SlideType} from "../common/model/SlideType";

@Injectable()
export class ParseService {

    public parse(fileContent): Presentation {
        const rawPresentation = JSON.parse(fileContent, this.transform);

        console.log('Presentation parsing complete!');

        return <Presentation> rawPresentation;
    }

    private transform(key, value): any {
        if (key === 'slides') {
            return value.map(obj => {
                if (obj.type === 'CODE') {
                    return new CodeSlide(obj.contentFile, obj.language, obj.title, obj.showLineNumbers);
                } else if (obj.type === 'PUG') {
                    return new Slide(obj.contentFile, SlideType.PUG);
                } else {
                    return new Slide(obj.contentFile, SlideType.MARKDOWN);
                }
            });
        }

        return value;
    }
}

import Presentation from '../model/Presentation';
import {Injectable} from '@angular/core';
import {SlideType} from '../model/SlideType';
import Slide from '../model/Slide';

@Injectable()
export default class ParseService {

    public parse(fileContent): Presentation {
        const rawPresentation = JSON.parse(fileContent, this.transform);

        console.log('Presentation parsing complete!');

        return <Presentation> rawPresentation;
    }

    private transform(key, value): any {
        if (key === 'slides') {
            return value.map(obj => {
                let slide: Slide = new Slide(obj.content, obj.type);
                if (obj.contentFile) {
                    slide.contentFile = obj.contentFile;
                }
                return slide;
            });
        }

        return value;
    }
}





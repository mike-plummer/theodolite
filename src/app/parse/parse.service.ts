import { Presentation } from '../common/model/Presentation';
import { Injectable } from '@angular/core';
import { Slide } from '../common/model/Slide';

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
                return new Slide(obj.contentFile, obj.type);
            });
        }

        return value;
    }
}





import { Presentation } from '../common/model/Presentation';
import { Injectable } from '@angular/core';
import { Slide } from '../common/model/Slide';
import { CodeSlide } from '../common/model/CodeSlide';
import { SlideType } from '../common/model/SlideType';
import { range } from 'lodash';

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
                    let highlightLinesString = obj.highlightLines;
                    let highlightLines: number[] = [];
                    if (highlightLinesString) {
                        highlightLinesString.substring(1, highlightLinesString.length - 1).split(',').forEach(highlightBlock => {
                            if (highlightBlock.indexOf('-') >= 0) {
                                let ends: string[] = highlightBlock.split('-');
                                highlightLines = highlightLines.concat(range(parseInt(ends[ 0 ].trim()), parseInt(ends[ 1 ].trim()) + 1));
                            } else {
                                highlightLines.push(parseInt(highlightBlock.trim()));
                            }
                        });
                    }
                    return new CodeSlide(obj.contentFile, obj.entranceAnimation, obj.exitAnimation, obj.language, obj.title, obj.showLineNumbers, highlightLines);
                } else if (obj.type === 'PUG') {
                    return new Slide(obj.contentFile, SlideType.PUG, obj.entranceAnimation, obj.exitAnimation);
                } else {
                    return new Slide(obj.contentFile, SlideType.MARKDOWN, obj.entranceAnimation, obj.exitAnimation);
                }
            });
        }

        return value;
    }
}

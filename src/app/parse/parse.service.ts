import Presentation from '../model/Presentation';
import {Injectable} from '@angular/core';

@Injectable()
export default class ParseService {

    public parse(fileContent): Presentation {
        const rawPresentation = JSON.parse(fileContent);

        console.log('Presentation parsing complete!');

        return <Presentation> rawPresentation;
    }
}





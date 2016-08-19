import {Component, Inject} from '@angular/core';
import ParseService from '../parse/parse.service';

@Component({
    selector: 'tdlt-file-loader',
    template: require('./file-loader.pug'),
    directives: [],
    pipes: [],
    styles: [require('./file-loader.scss').toString()],
    providers: []
})
export default class FileLoaderComponent {

    constructor(@Inject(ParseService) private parser: ParseService) {

    }
}
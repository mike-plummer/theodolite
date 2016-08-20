import {Component, ViewEncapsulation} from '@angular/core';
import FileLoaderComponent from '../fileLoader/fileLoader.component';
import PresentationComponent from '../presentation/presentation.component';
import MarkdownService from '../markdown/markdown.service';
import Presentation from '../model/Presentation';

@Component({
    selector: 'theodolite',
    template: require('./theodolite.pug'),
    directives: [FileLoaderComponent, PresentationComponent],
    pipes: [],
    styles: [require('./theodolite.scss').toString(), require('../../../node_modules/furtive/scss/all.scss').toString()],
    encapsulation: ViewEncapsulation.None,
    providers: [MarkdownService]
})
export default class TheodoliteComponent {

    constructor() {

    }

    get presentation(): Presentation {
        return null;
    }
}
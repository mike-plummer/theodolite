import {Component, ViewEncapsulation} from '@angular/core';
import FileLoaderComponent from '../fileLoader/fileLoader.component';
import PresentationComponent from '../presentation/presentation.component';
import Presentation from '../model/Presentation';

@Component({
    selector: 'theodolite',
    template: require('./theodolite.pug'),
    directives: [FileLoaderComponent, PresentationComponent],
    pipes: [],
    styles: [require('./theodolite.scss').toString(), require('../../../node_modules/furtive/scss/all.scss').toString()],
    encapsulation: ViewEncapsulation.None,
    providers: []
})
export default class TheodoliteComponent {
    public presentation: Presentation;

    constructor() {

    }
}
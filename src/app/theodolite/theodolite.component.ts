import {Component} from '@angular/core';
import FileLoaderComponent from '../fileLoader/fileLoader.component';
import PresentationComponent from '../presentation/presentation.component';
import Presentation from '../model/Presentation';

@Component({
    selector: 'theodolite',
    template: require('./theodolite.pug'),
    directives: [FileLoaderComponent, PresentationComponent],
    pipes: [],
    styles: [require('./theodolite.scss').toString()],
    providers: []
})
export default class TheodoliteComponent {
    public presentation: Presentation;

    constructor() {

    }
}
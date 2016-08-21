import {Component, ViewEncapsulation, Inject} from '@angular/core';
import PresentationComponent from '../presentation/presentation.component';
import MarkdownService from '../markdown/markdown.service';
import Presentation from '../model/Presentation';
import LookaheadComponent from '../lookahead/lookahead.component';
import ParseService from '../parse/parse.service';

@Component({
    selector: 'theodolite',
    template: require('./theodolite.pug'),
    directives: [PresentationComponent, LookaheadComponent],
    pipes: [],
    styles: [require('./theodolite.scss').toString(), require('../../../node_modules/furtive/scss/all.scss').toString()],
    encapsulation: ViewEncapsulation.None,
    providers: [MarkdownService, ParseService]
})
export default class TheodoliteComponent {

    public presentation: Presentation;

    constructor(@Inject(ParseService) private parseService: ParseService) {
        let json = require('raw!../../../content/presentation.json').toString();
        this.presentation = parseService.parse(json);
    }
}
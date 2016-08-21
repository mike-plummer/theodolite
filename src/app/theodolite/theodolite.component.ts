import { Component, ViewEncapsulation, Inject } from '@angular/core';
import { Presentation } from '../model/Presentation';
import { ParseService } from '../parse/parse.service';

@Component({
    selector: 'theodolite',
    template: require('./theodolite.pug'),
    styles: [ require('./theodolite.scss').toString(), require('../../../node_modules/furtive/scss/all.scss').toString() ],
    encapsulation: ViewEncapsulation.None
})
export class TheodoliteComponent {

    public presentation: Presentation;
    public showInfoPane: boolean = false;

    constructor(@Inject(ParseService) private parseService: ParseService) {
        let json = require('raw!../../../content/presentation.json').toString();
        this.presentation = parseService.parse(json);
    }

    onAboutClick() {
        this.showInfoPane = !this.showInfoPane;
    }
}
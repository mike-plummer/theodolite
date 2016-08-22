import { Component, ViewEncapsulation, Inject } from '@angular/core';
import { PresentationComponent } from '../presentation/presentation.component';
import { Presentation } from '../model/Presentation';
import { ParseService } from '../parse/parse.service';

@Component({
    selector: 'theodolite',
    template: require('./theodolite.pug'),
    directives: [ PresentationComponent ],
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
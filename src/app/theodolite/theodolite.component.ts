import { Component, ViewEncapsulation, Inject } from '@angular/core';
import { PresentationComponent } from '../presentation/presentation.component';
import { Presentation } from '../common/model/Presentation';
import { ParseService } from '../parse/parse.service';

@Component({
    selector: 'theodolite',
    template: require('./theodolite.pug'),
    styles: [ require('./theodolite.scss').toString(),
              require('furtive/scss/all.scss').toString(),
              require('font-awesome/scss/font-awesome.scss').toString() ],
    encapsulation: ViewEncapsulation.None
})
export class TheodoliteComponent {

    public presentation: Presentation;

    constructor(@Inject(ParseService) private parseService: ParseService) {
        let json = require('raw!../../../content/presentation.json');
        this.presentation = parseService.parse(json);
    }
}
import { Component, ViewEncapsulation, Inject } from '@angular/core';
import { PresentationComponent } from '../presentation/presentation.component';
import { Presentation } from '../common/model/Presentation';
import { ParseService } from '../parse/parse.service';

@Component({
    selector: 'theodolite',
    template: require('./theodolite.pug'),
    directives: [ PresentationComponent ],
    styles: [ require('./theodolite.scss').toString(),
              require('furtive/css/furtive.min.css').toString(),
              require('font-awesome/css/font-awesome.min.css').toString()],
    encapsulation: ViewEncapsulation.None
})
export class TheodoliteComponent {

    public presentation: Presentation;
    public showInfoPane: boolean = false;

    constructor(@Inject(ParseService) private parseService: ParseService) {
        let json = require('raw!../../../content/presentation.json');
        this.presentation = parseService.parse(json);
    }

    onAboutClick() {
        this.showInfoPane = !this.showInfoPane;
    }
}
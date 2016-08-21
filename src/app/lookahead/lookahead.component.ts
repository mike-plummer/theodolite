import { Component, Input } from '@angular/core';
import { Presentation } from '../model/Presentation';
import { PresentationComponent } from '../presentation/presentation.component';

@Component({
    selector: 'tdlt-lookahead',
    template: require('./lookahead.pug'),
    directives: [PresentationComponent],
    pipes: [],
    styles: [require('./lookahead.scss').toString()],
    providers: []
})
export class LookaheadComponent {

    @Input() public presentation: Presentation;

    constructor() {

    }
}
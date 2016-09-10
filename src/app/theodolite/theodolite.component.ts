import { Component, ViewEncapsulation, Inject } from '@angular/core';
import { Presentation } from '../common/model/Presentation';
import { ParseService } from '../parse/parse.service';
import { EventsService } from '../events/events.service';

@Component({
    selector: 'theodolite',
    template: require('./theodolite.pug'),
    styles: [ require('./theodolite.scss').toString(),
              require('assets/fonts/font.scss').toString(),
              require('furtive/scss/all.scss').toString(),
              require('font-awesome/scss/font-awesome.scss').toString() ],
    encapsulation: ViewEncapsulation.None
})
export class TheodoliteComponent {

    public presentation: Presentation;

    constructor(@Inject(ParseService) private parseService: ParseService,
                @Inject(EventsService) private eventsService: EventsService) {
        let json = require('raw!content/presentation.json');
        this.presentation = parseService.parse(json);
        this.eventsService.slideCountChanged.next(this.presentation ? this.presentation.slides.length : 0);
    }
}
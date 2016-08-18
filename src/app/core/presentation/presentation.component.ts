import { Component } from '@angular/core';
import SlideComponent from '../slide/slide.component'

@Component({
    selector: 'presentation',
    template: require('./presentation.pug'),
    directives: [],
    pipes: [],
    styles: [require('./presentation.scss').toString()],
    providers: [SlideComponent]
})
export default class PresentationComponent {

}
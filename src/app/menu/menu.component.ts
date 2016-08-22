import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';

@Component({
    selector: 'tdlt-menu',
    template: require('./menu.pug'),
    directives: [ AboutComponent ],
    pipes: [],
    styles: [require('./menu.scss').toString()],
    providers: []
})
export class MenuComponent {

    constructor() {

    }
}
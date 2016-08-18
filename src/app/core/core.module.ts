import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import PresentationComponent  from './presentation/presentation.component';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ PresentationComponent ],
    bootstrap:    [ PresentationComponent ]
})
export default class CoreModule { }
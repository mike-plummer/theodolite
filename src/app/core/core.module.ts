import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PresentationComponent }  from './presentation.component';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ PresentationComponent ],
    bootstrap:    [ PresentationComponent ]
})
export class CoreModule { }
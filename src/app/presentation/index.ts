import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlidesModule } from '../slide/index';
import { PresentationComponent } from './presentation.component';
import { ParseService } from '../parse/parse.service';

@NgModule({
    imports: [ BrowserModule, SlidesModule ],
    declarations: [ PresentationComponent ],
    providers: [ ParseService ]
})
export class PresentationModule {
}
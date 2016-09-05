import { NgModule } from '@angular/core';
import { TheodoliteComponent } from './theodolite/theodolite.component';
import { MarkdownSlideComponent } from './slide/markdown/markdownSlide.component';
import { CodeSlideComponent } from './slide/code/codeSlide.component';
import { PresentationComponent } from './presentation/presentation.component';
import { MarkdownService } from './markdown/markdown.service';
import { ParseService } from './parse/parse.service';
import { BrowserModule } from '@angular/platform-browser';
import { ControlsComponent } from './controls/controls.component';
import { AboutComponent } from './about/about.component';
import { ModalComponent } from './modal/modal.component';
import { SlideComponent } from './slide/slide.component';
import { DefaultValuePipe } from './common/default.pipe';
import { HighlightService } from './highlight/highlight.service';
import { EventsService } from './events/events.service';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ TheodoliteComponent, PresentationComponent, SlideComponent, MarkdownSlideComponent,
                    CodeSlideComponent, ControlsComponent, AboutComponent, ModalComponent, DefaultValuePipe,
                    ProgressComponent ],
    bootstrap: [ TheodoliteComponent ],
    providers: [ EventsService, HighlightService, MarkdownService, ParseService ]
})
export class TheodoliteModule {
    constructor() {
    }
}
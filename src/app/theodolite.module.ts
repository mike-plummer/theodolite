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

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ TheodoliteComponent, PresentationComponent, MarkdownSlideComponent, CodeSlideComponent, ControlsComponent, AboutComponent, ModalComponent ],
    bootstrap: [ TheodoliteComponent ],
    providers: [ MarkdownService, ParseService ]
})
export class TheodoliteModule {
}
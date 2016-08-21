import { NgModule } from '@angular/core';
import { TheodoliteComponent } from './theodolite/theodolite.component';
import { MarkdownSlideComponent } from './slide/markdown/markdownSlide.component';
import { CodeSlideComponent } from './slide/code/codeSlide.component';
import { PresentationComponent } from './presentation/presentation.component';
import { LookaheadComponent } from './lookahead/lookahead.component';
import { BrowserModule } from '@angular/platform-browser';
import { MarkdownService } from './markdown/markdown.service';
import { ParseService } from './parse/parse.service';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [BrowserModule, CommonModule],
    declarations: [TheodoliteComponent, PresentationComponent, LookaheadComponent, MarkdownSlideComponent, CodeSlideComponent],
    bootstrap: [TheodoliteComponent],
    providers: [MarkdownService, ParseService]
})
export class TheodoliteModule {
}
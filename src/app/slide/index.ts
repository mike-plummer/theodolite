import { NgModule } from '@angular/core';
import { MarkdownSlideComponent } from './markdown/markdownSlide.component';
import { CodeSlideComponent } from './code/codeSlide.component';
import { BrowserModule } from '@angular/platform-browser';
import { MarkdownService } from '../markdown/markdown.service';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ CodeSlideComponent, MarkdownSlideComponent ],
    providers: [ MarkdownService ]
})
export class SlidesModule {
}
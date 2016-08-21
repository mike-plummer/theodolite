import { NgModule } from '@angular/core';
import { TheodoliteComponent } from './theodolite/theodolite.component';
import { PresentationComponent } from './presentation/presentation.component';
import { LookaheadComponent } from './lookahead/lookahead.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [BrowserModule],
    declarations: [TheodoliteComponent, PresentationComponent, LookaheadComponent],
    bootstrap: [TheodoliteComponent]
})
export class TheodoliteModule {
}
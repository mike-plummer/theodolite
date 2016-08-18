import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import CoreModule from '../core/core.module';
import FrameComponent from './frame/frame.component';

@NgModule({
    imports:      [ BrowserModule, CoreModule ],
    declarations: [ FrameComponent ],
    bootstrap:    [ FrameComponent ]
})
export default class DisplayModule { }
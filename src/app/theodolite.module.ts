import {NgModule}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import TheodoliteComponent from './theodolite/theodolite.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ TheodoliteComponent ],
    bootstrap:    [ TheodoliteComponent ]
})
export default class TheodoliteModule { }
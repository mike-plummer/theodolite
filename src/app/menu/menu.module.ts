import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu.component';
import { ControlsComponent } from './controls/controls.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ MenuComponent, AboutComponent, ControlsComponent ],
    exports: [ MenuComponent ]
})
export class MenuModule {
}
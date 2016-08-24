import 'zone.js/dist/zone';
import 'reflect-metadata';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TheodoliteModule } from './app/theodolite.module';

platformBrowserDynamic().bootstrapModule(TheodoliteModule);
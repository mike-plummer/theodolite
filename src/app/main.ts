import 'zone.js/dist/zone';
import 'reflect-metadata';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TheodoliteModule } from './theodolite.module';

platformBrowserDynamic().bootstrapModule(TheodoliteModule);
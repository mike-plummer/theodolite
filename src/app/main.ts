import 'zone.js/dist/zone';
import 'reflect-metadata';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import CoreModule from './core/core.module';

platformBrowserDynamic().bootstrapModule(CoreModule);
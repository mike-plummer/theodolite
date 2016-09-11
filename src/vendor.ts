// Angular 2
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';

import 'rxjs';

// Libraries
import 'prismjs';
import 'moment';
// Use a variable to trick webpack into bundling everything under prismjs/components
// into the vendor bundle
const exemplarFilename = 'prism-typescript.js';
require(`prismjs/components/${exemplarFilename}`);

import 'marked';
import 'lodash';

// Styles
require('animate.css/animate.css');
require('furtive/scss/all.scss');
require('prismjs/themes/prism.css');
require('font-awesome/scss/font-awesome.scss');
require('assets/fonts/font.scss');
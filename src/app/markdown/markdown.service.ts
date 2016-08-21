import {Injectable} from '@angular/core';

const highlightjs = require('highlight.js');
const marked = require('marked');

@Injectable()
export default class MarkdownService {

    constructor() {
        marked.setOptions({
            highlight: function (code) {
                return highlightjs.highlightAuto(code).value;
            }
        });
    }

    public parse(markdown): string {
        return marked(markdown);
    }
}





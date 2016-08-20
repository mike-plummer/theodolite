import {Injectable} from '@angular/core';

@Injectable()
export default class MarkdownService {

    private marked = require('marked');

    constructor() {
        this.marked.setOptions({
            highlight: function (code) {
                return require('highlight.js').highlightAuto(code).value;
            }
        });
    }

    public parse(markdown): string {
        return this.marked(markdown);
    }
}





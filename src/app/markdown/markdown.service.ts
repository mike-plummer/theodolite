import { Injectable, Inject } from '@angular/core';
import { HighlightService } from '../highlight/highlight.service';

const marked = require('marked');

@Injectable()
export class MarkdownService {

    constructor(@Inject(HighlightService) private highlightService: HighlightService) {
        marked.setOptions({
            highlight: function (code, lang) {
                return highlightService.highlight(code, lang);
            }
        });
    }

    public parse(markdown): string {
        return marked(markdown);
    }
}

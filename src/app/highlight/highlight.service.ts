import { Injectable } from '@angular/core';

const Prism = require('prismjs');

@Injectable()
export class HighlightService {

    constructor() {
    }

    public highlight(code, language): string {
        if (!language) {
            return code;
        }

        if (!Prism.languages[language]) {
            try {
                require(`prismjs/components/prism-${language}.min.js`);
            } catch (err) {
                console.log(`Failed to load Prism language defn for '${language}'`)
            }
        }
        if (Prism.languages[language]) {
            return Prism.highlight(code, Prism.languages[ language ]);
        }

        return code;
    }
}

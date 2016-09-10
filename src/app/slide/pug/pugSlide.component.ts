import {Component, Inject, Input, OnChanges, SimpleChanges} from "@angular/core";
import {Slide} from "../../common/model/Slide";
import {SafeHtml, DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'tdlt-pug-slide',
    template: require('./pugSlide.pug'),
    styles: [ require('./pugSlide.scss').toString() ]
})
export class PugSlideComponent implements OnChanges {

    @Input() public slide: Slide;
    public content: SafeHtml;

    constructor(@Inject(DomSanitizer) private domSanitizer: DomSanitizer) {

    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes[ 'slide' ]) {
            if (this.slide) {
                // Strip off extension so that our require string includes a hard-coded '.pug' extension
                // This allows Webpack dynamic file require to safely bundle files it knows will work with
                // the pug-html-loader
                let fileName = this.slide.contentFile.substring(0, this.slide.contentFile.lastIndexOf('.'));
                let fileContent = require(`!!html!pug-html-loader!content/${fileName}.pug`);
                this.content = this.domSanitizer.bypassSecurityTrustHtml(fileContent);
            } else {
                this.content = null;
            }
        }
    }
}
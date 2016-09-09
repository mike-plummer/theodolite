import {Component, HostListener, style, animate, state, transition, trigger} from "@angular/core";
import {KEYCODES} from "../common/keycodes";

@Component({
    selector: 'tdlt-timer',
    template: require('./timer.pug'),
    styles: [ require('./timer.scss').toString() ],
    animations: [
        trigger('slideUpDown', [
            state('in', style({transform: 'translateX(0)'})),
            transition('void => *', [
                style({transform: 'translateY(-100%)'}),
                animate(200, style({transform: 'translateY(0)'})),
            ]),
            transition('* => void', [
                animate(200, style({transform: 'translateY(-100%)'}))
            ])
        ])
    ]
})
export class TimerComponent {

    public displayed: boolean = false;
    public elapsedSeconds: number = 0;
    public isRunning: boolean = false;
    private timer: any;

    constructor() {

    }

    @HostListener('document:keydown', [ '$event' ]) onKey($event: KeyboardEvent) {
        if ($event.keyCode == KEYCODES.SHIFT) {
            this.displayed = !this.displayed;
        }

        return true;
    }

    toggle() {
        if (this.isRunning) {
            this.stopTimer();
        } else {
            this.startTimer();
        }

        this.isRunning = !this.isRunning;
    }

    reset() {
        this.stopTimer();
        this.isRunning = false;
        this.elapsedSeconds = 0;
    }

    startTimer() {
        if (this.timer) {
            this.stopTimer();
        }
        this.timer = setTimeout(() => {
            if (this.isRunning) {
                this.elapsedSeconds += 1;
            }

            this.startTimer();
        }, 1000);
    }

    stopTimer() {
        clearTimeout(this.timer);
    }
}
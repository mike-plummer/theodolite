import { Injectable } from '@angular/core';
import { SlideChangeEvent } from '../common/SlideChangeEvent';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class EventsService {

    public slideChanged: Subject<SlideChangeEvent> = new BehaviorSubject<SlideChangeEvent>(<SlideChangeEvent>{});
    public onSlideChanged: Observable<SlideChangeEvent> = this.slideChanged.asObservable();

    public slideCountChanged: Subject<number> = new BehaviorSubject<number>(0);
    public onSlideCountChange: Observable<number> = this.slideCountChanged.asObservable();
}

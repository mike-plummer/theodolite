import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

/**
 * Convert a number in seconds into Hours:Minutes:Seconds format
 */
@Pipe({name: 'hms'})
export class HmsPipe implements PipeTransform {
    transform(value: number): string {
        return moment().startOf('day')
            .seconds(value)
            .format('H:mm:ss');
    }
}
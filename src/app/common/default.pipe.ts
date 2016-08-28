import { Pipe, PipeTransform } from '@angular/core';
import { isNil } from 'lodash';

@Pipe({name: 'default'})
export class DefaultValuePipe implements PipeTransform {
    transform(value: any, defaultValue: any): number {
        return isNil(value) ? defaultValue : value;
    }
}
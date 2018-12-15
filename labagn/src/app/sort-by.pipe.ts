import { Pipe, PipeTransform } from '@angular/core';
import {Employee} from './employee';
import * as _ from 'lodash';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(value: Employee[], col: string=''): Employee[] {
    if(col===''){
	return value;
	}
	if(value && value.length>1){
	return _.orderBy(value,[col]);
	}
	return value;
  }
}
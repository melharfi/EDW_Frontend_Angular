import { map, Observable, of, tap, timer } from 'rxjs';
import { DatePipe, DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activityDuration'
})
export class ActivityDurationPipe implements PipeTransform {

  /**
   *
   */
  constructor() {

  }

  transform(value?: number, format?: string): Observable<string | null> {

    return timer(0,1000).pipe(map(() => this.calculateElapsedTime(value, format)));
  }

  calculateElapsedTime(value?:number, format?: string) : string | null
  {
    var currentTime = Date.now();
    var userActivityTime = (value as number) * 1000;
    var elapsedTime = currentTime - userActivityTime;
    var date = new Date(elapsedTime);
    console.log("getElapsedTime = " + date)

    let pipe = new DatePipe("en-US");
    return pipe.transform(date, format);
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatRanking',
  standalone: true
})
export class FormatRankingPipe implements PipeTransform {

  transform(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

}

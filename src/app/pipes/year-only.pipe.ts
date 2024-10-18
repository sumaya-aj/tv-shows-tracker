import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearOnly',
  standalone: true
})
export class YearOnlyPipe implements PipeTransform {
  transform(dateString: string): string {
    var stringToDate = new Date(dateString);
    var yearOnly = stringToDate.getFullYear();
    return yearOnly.toString();
  }
}

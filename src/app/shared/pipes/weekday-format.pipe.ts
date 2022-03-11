import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weekdayFormat',
})
export class WeekdayFormatPipe implements PipeTransform {
  transform(weekDayNumber: number) {
    let day: string = '';
    switch (weekDayNumber) {
      case 1:
        day = 'Lunes';
        break;
      case 2:
        day = 'Martes';
        break;
      case 3:
        day = 'Miercoles';
        break;
      case 4:
        day = 'Jueves';
        break;
      case 5:
        day = 'Viernes';
        break;
      case 6:
        day = 'Sabado';
        break;
      case 7:
        day = 'Domingo';
        break;
    }
    return day;
  }
}

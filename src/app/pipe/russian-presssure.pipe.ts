import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'toRussianPressure'
})
export class RussianPressurePipe implements PipeTransform {

  transform(value: number | undefined): number {
    if (!value) {
      return 0;
    }
    return value * 0.75;
  }
}

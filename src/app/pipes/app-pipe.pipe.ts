import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appPipe'
})
export class AppPipePipe implements PipeTransform {

  transform(value: any, input: string): any {
    if (input) {
      input = input.toLowerCase();
      return value.filter(function (el: any) {
       return el.name.toLowerCase().indexOf(input) > -1;
     })
    }
    return value;
  }

}

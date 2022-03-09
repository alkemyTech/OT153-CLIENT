import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  transform(rawNum:string) {
    let numAux:string = ''
    let c:number = 0
    for (let i = 0; i < rawNum.length; i++){
      c++
      numAux = numAux + rawNum[i]
      if (c == 4){
        numAux = numAux + '-'
        c = 0
      }
    }
    return numAux
  }
} 
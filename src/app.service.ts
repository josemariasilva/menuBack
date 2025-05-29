import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Maracuja de limão';
  }

  sum(a:number, b:number): number{
    
    return a+b;
  }

  diff(a:number, b:number): number{
    return a-b;
  }

  mult(a:number, b:number): number{
    return a*b;
  }

  multparams(mparams: number[]): number{
    let result : number  = 0;
    for (let index = 0; index < mparams.length; index++) {
      result += mparams[index];
    }


    return result;
  }
}

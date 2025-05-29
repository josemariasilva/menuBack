import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("test")
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("sum")
  postSum(@Body() body:any): number{
    // console.log(body)
    return this.appService.sum(body.one, body.two);
  }

  @Post("diff")
  postDiff(@Body() body:any): number{
    // console.log(body)
    const{one,two} = body;
    return this.appService.diff(one, two);
  }

  @Post("mult")
  postMultiply(@Body() body:any): number{
    // console.log(body)
    return this.appService.mult(body.one, body.two);
  }

  @Post("multsum")
  postMultSum(@Body() mult:any): any{
    return this.appService.multparams(mult.arr);
  }
}

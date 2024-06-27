import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {

    const res = this.appService.getHello() +" "+ this.appService.getName()
    return res;
  }

  @Get('/something')

  getSomething(){
    return this.appService.getSomething()
  }

 
}

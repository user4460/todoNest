//Controlloerとは、リクエストを受け取り、レスポンスを返す役割を持つクラスのこと
//Getとは、HTTPメソッドの一つで、GETメソッドを受け取った時に、処理を行うことを示すデコレータ
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//Controllerとは、リクエストを受け取り、レスポンスを返す役割を持つクラスのこと
@Controller()
export class AppController {
  //constructorとは、クラスのインスタンスを生成するときに、呼び出されるメソッド
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

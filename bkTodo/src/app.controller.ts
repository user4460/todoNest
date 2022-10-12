//Controlloerとは、リクエストを受け取り、レスポンスを返す役割を持つクラスのこと
//Getとは、HTTPメソッドの一つで、GETメソッドを受け取った時に、処理を行うことを示すデコレータ
import { Controller, Delete, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

//Controllerとは、リクエストを受け取り、レスポンスを返す役割を持つクラスのこと
@Controller()
export class AppController {
  //constructorとは、クラスのインスタンスを生成するときに、呼び出されるメソッド
  constructor(private readonly appService: AppService) {}

  //Getとは、HTTPメソッドの一つで、GETメソッドを受け取った時に、処理を行うことを示すデコレータ
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //Postとは、HTTPメソッドの一つで、POSTメソッドを受け取った時に、処理を行うことを示すデコレータ
  @Post()
  postHello(): string {
    return this.appService.postHello();
  }

  //Deleteとは、HTTPメソッドの一つで、DELETEメソッドを受け取った時に、処理を行うことを示すデコレータ
  @Delete()
  deleteHello(): string {
    return this.appService.deleteHello();
  }
}

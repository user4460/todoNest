//Injectableとは、DIコンテナに登録するためのデコレーター
//DIコンテナに登録することで、他のクラスからインスタンスを取得できるようになる
//DIコンテナとは、クラスのインスタンスを生成し、管理する仕組み
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  //getHelloとは、Hello World!を返すメソッド
  getHello(): string {
    return 'Hello World!';
  }

  //追記　getHelloの真似、postHelloとは、Hello World!を返すメソッド
  postHello(): string {
    //getHelloとは、Hello World!を返すメソッド
    return 'Hello World!';
  }

  //追記　getHelloの真似、updateHelloとは、Hello World!を返すメソッド
  deleteHello(): string {
    //getHelloとは、Hello World!を返すメソッド
    return 'Hello World!';
  }
}

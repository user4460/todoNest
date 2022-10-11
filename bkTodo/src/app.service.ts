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
}

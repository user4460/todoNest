//NestFactoryとは、Nest.jsのアプリケーションを作成するためのファクトリークラスです。NestFactoryを使用して、アプリケーションを作成し、アプリケーションを起動することができます。
import { NestFactory } from '@nestjs/core';
//AppModuleとは、アプリケーションのルートモジュールです。アプリケーションのルートモジュールは、アプリケーションの全ての機能を提供するモジュールです。
import { AppModule } from './app.module';

//bootstrapとは、アプリケーションを起動するためのメソッドです。
//asyncとは、非同期処理を行うためのメソッドです。
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

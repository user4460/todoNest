//NestFactoryとは、Nest.jsのアプリケーションを作成するためのファクトリークラスです。NestFactoryを使用して、アプリケーションを作成し、アプリケーションを起動することができます。
import { NestFactory } from '@nestjs/core';

//AppModuleとは、アプリケーションのルートモジュールです。アプリケーションの全ての機能を提供するモジュールです。
import { AppModule } from './app.module';

//FastifyAdapterとは、fastifyを使用してNest.jsアプリケーションを作成するためのアダプタークラスです。
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

//bootstrapとは、アプリケーションを起動するためのメソッドです。
//asyncとは、非同期処理を行うためのメソッドです。
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /* FastifyAdapterを入れたapp
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  */
  await app.listen(3000);
}
bootstrap();

//Moduleとは、アプリケーションの機能をまとめたもの
import { Module } from '@nestjs/common';
//AppControllerとは、アプリケーションのルートコントローラーです。ルートコントローラーは、アプリケーションの全ての機能を提供するコントローラーです。
import { AppController } from './app.controller';
//AppServiceとは、アプリケーションのルートサービスです。ルートサービスは、アプリケーションの全ての機能を提供するサービスです。
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

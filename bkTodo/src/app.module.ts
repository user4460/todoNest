//Moduleとは、アプリケーションの機能をまとめたもの
import { Module } from '@nestjs/common';
//AppControllerとは、アプリケーションのルートコントローラーです。ルートコントローラーは、アプリケーションの全ての機能を提供するコントローラーです。
import { AppController } from './app.controller';
//AppServiceとは、アプリケーションのルートサービスです。ルートサービスは、アプリケーションの全ての機能を提供するサービスです。
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';

//Moduleのデコレーター、@とは、デコレーターを宣言するための記号、
//デコレーターとは、クラスに機能を追加するためのもの
@Module({
  imports: [TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

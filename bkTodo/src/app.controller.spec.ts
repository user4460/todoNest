//Testとは、
import { Test, TestingModule } from '@nestjs/testing';
//AppControllerとは、アプリケーションのルートコントローラーです。ルートコントローラーは、アプリケーションの全ての機能を提供するコントローラーです。
import { AppController } from './app.controller';
//AppServiceとは、アプリケーションのルートサービスです。ルートサービスは、アプリケーションの全ての機能を提供するサービスです。
import { AppService } from './app.service';

//コマンド実行は、npm test
//AppControllerのテスト
describe('AppController', () => {
  let appController: AppController;

  //テストの前に実行される処理
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  //rootのテスト
  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});

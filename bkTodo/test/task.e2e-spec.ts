//app.e2e-spec.tsとは、E2Eテストのためのファイルです。
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

// describeは、テストのグループ化を行うための関数です。
describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  /*
  it('/tasks (GET)', () => {
    return request(app.getHttpServer())
      .get('/tasks')
      .expect(200)
      .expect([]);
  })
  */
  it('/tasks (POST)', () => {
    return request(app.getHttpServer())
      .post('/tasks')
      .send({ title: 'test', description: 'test' })
      .expect(201);
  });
   it(
})
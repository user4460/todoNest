import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';

//providersにPrismaServiceを追加
//https://zenn.dev/devgeeeen/articles/125a076f81b0df
import { PrismaService } from './../prisma.service';

@Module({
  controllers: [TaskController],
  providers: [TaskService]
})
export class TaskModule {}

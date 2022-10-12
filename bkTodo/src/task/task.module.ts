import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';

//providersにPrismaServiceを追加
import { PrismaService } from './../prisma.service';

@Module({
  controllers: [TaskController],
  providers: [TaskService]
})
export class TaskModule {}

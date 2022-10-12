//https://zenn.dev/devgeeeen/articles/125a076f81b0df
import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma.service';
import { task, Prisma } from '@prisma/client';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.taskCreateInput): Promise<task> {
    return this.prisma.task.create({ data });
  }

  async findAll(): Promise<task[]> {
    return this.prisma.task.findMany();
  }

  async findOne(id: number) {
    return this.prisma.task.findUnique({
      where: { id: id },
    });
  }

  async update(id: number, data: Prisma.taskUpdateInput): Promise<task> {
    return this.prisma.task.update({
      where: { id: id },
      data,
    });
  }

  async remove(id: number): Promise<task> {
    return this.prisma.task.delete({
      where: { id: id },
    });
  }
}

/*init
import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  create(createTaskDto: CreateTaskDto) {
    return 'This action adds a new task';
  }

  findAll() {
    return `This action returns all task`;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
*/
